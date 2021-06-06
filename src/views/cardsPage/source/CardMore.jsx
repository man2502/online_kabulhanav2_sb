import {
  Button,
  Checkbox,
  FormControlLabel,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import useForm from "./../../../common/form-validate/useForm";
import ConfirmInfo from "src/views/base/confirmInfo/ConfirmInfo";
import getCurrentDate from "src/common/getCurrentDate";
import { dateWorking } from "src/common/dateWorking";
import { Alert, AlertTitle, Autocomplete } from "@material-ui/lab";
import { CheckBox, CheckBoxOutlineBlankOutlined } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  sms: {
    width: "100%",
    // paddingRight:'15px',
    marginRight: "0",
    cursor:'pointer',
    border:'2px solid #ccc',
    borderRadius:'8px',
    padding:'10px 0',
  },
  icon:{
      fontSize:'2.2rem'
  },
  servicesCheckbox:{
},
itemLabel:{
    
    fontSize:'1.3rem'
  }
}));

const CardMore = (props) => {
    const [message, setMessage] = useState(props.data.message)
  const classes = useStyles();
  const stateSchema = {
    is_hurry: { value: false, error: "" },

    will_delivered: { value: false, error: "" },

  };
  const stateValidatorSchema = {
    message: {},
  };
  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const { is_hurry, will_delivered} = values;
  const { handleNext, register, setCollection, activeStep, handleBack, data } =
    props;

  const [open, setOpen] = React.useState(false);
  // props.setCollection(values)

  const setData = async () => {
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const agree = async () => {
    await setCollection({ ...values ,message: message, is_hurry:is_hurry, will_delivered:will_delivered, });
    await handleClose();
    // console.log(values)
    handleNext();
  };
  const CurrentDate = useMemo(() => {
    return getCurrentDate();
  }, [open]);
  const cWidth = document.body.clientWidth > 411;

  // const hasHistory = !!data.address &&
  //     !!data.surnameLatin
  // const history_address = hasHistory ? data.address : ''
  // const history_birthPlace = hasHistory ? data.birthPlace : ''

  // useEffect(() => {
  //     if (hasHistory) {
  //         const valueAddress = {
  //             target: { value: history_address, name: 'address' }
  //         }
  //         handleOnChange(valueAddress)

  //         const valueBranch = {
  //             target: { value: history_branch, name: 'branch' }
  //         }
  //         handleOnChange(valueBranch)

  //     }

  // }, [history_address,
  //     history_birthPlace,

  // ])

  const createConfirmInfo = {
    priceData: props.docData[Number(props.dataDoc.docModeInfo)],
    titles: {
      paymentName: "Kartyň tölegi",
    },
    data: [
      { value: "Ady:", name: props.dataF.name },
      { value: "Familiýasy:", name: props.dataF.surname },
      { value: "Atasynyň ady:", name: props.dataF.thirdName },
      {
        value: "Doglan senesi: ",
        name: props.dataF.birthDay
          ? dateWorking().createDate(props.dataF.birthDay)
          : "",
      },
      {
        value: "Passport:",
        name:
          props.dataF.passport_first +
          "-" +
          props.dataF.passport_second +
          props.dataF.passport,
      },
      {
        value: "Passportyň berlen senei: ",
        name: props.dataF.passportDate
          ? dateWorking().createDate(props.dataF.passportDate)
          : "",
      },
      { value: "Passportyň berlen ýeri: ", name: props.dataF.passportGiven },
      { value: "Ýaşaýan salgysy:", name: props.data.address },
      { value: "Doglan ýeri:", name: props.data.birthPlace },
      // { value: 'Wezipesi:', name: workPosition },
      // { value: 'Aýlygyň möçberi: ', name: salary },
      {
        value: "Haýsy şahamça ýüz tutuldy: ",
        name: props.data.branch !== null ? props.data.branch.name : "",
      },
      { value: "Telefon:", name: props.data.phone },
      { value: "SMS birikdirme", name: message === true ? "hawa" : "ýok" },
      { value: "Öý telefony: ", name: props.data.homePhone },
      {
        value: "Jynsy:",
        name: props.dataF.gender === "male" ? "Erkek" : "Zenan",
      },
      {
        value: "Milleti:",
        name:
          props.dataF.nationality === "true"
            ? "türkmen"
            : props.dataF.nationality,
      },
      { value: 'Gyssaglymy:', name: is_hurry ? 'hawa' : 'ýok' },
      { value: 'Eltip bermek hyzmatyndan peýdalanýaňyz:', name: will_delivered ? 'hawa' : 'ýok' },
      {
        value: "Banka barmaly wagtyňyz: ",
        name:
          dateWorking().createDate(
            props.data.inviteDate !== "Invalid Date" &&
              props.data.inviteDate !== null
              ? props.data.inviteDate
              : new Date()
          ) +
          " " +
          props.data.inviteTime +
          ":00",
      },
      { value: "Kod sözi :", name: props.data.secretWord },

      { value: "Bellik: ", name: props.data.note },
    ],
  };
  // debugger
  // console.log(inviteDate)
  const handleBackSave = async () => {
    await setCollection({ ...values });
    handleBack();
  };
//   debugger;
  return (
    <div style={{textAlign:'center'}}>
      <ConfirmInfo
        open={open}
        data={createConfirmInfo}
        dataDoc={props.dataDoc}
        handleClose={handleClose}
        agree={agree}
        cWidth={cWidth}
        backButton={props.backButton}
        services={{is_hurry,will_delivered,message}}
      />
    
      <FormControlLabel
        className={classes.sms}
        classes={{label:classes.itemLabel}}
        control={
          <Checkbox
            classes={{ root: classes.servicesCheckbox }}
            icon={<CheckBoxOutlineBlankOutlined className={classes.icon}/>}
            checkedIcon={<CheckBox className={classes.icon}/>}
            checked={message}
            color="primary"
            name="message"
            onChange={(e) => {
              setMessage(e.target.checked)
            }}
          />
        }
        label="SMS-birikdirme"
      />
      <br/>

      <FormControlLabel
        className={classes.sms}
        classes={{label:classes.itemLabel}}
        control={
          <Checkbox
            classes={{ root: classes.servicesCheckbox }}
            icon={<CheckBoxOutlineBlankOutlined className={classes.icon}/>}
            checkedIcon={<CheckBox className={classes.icon}/>}
            checked={will_delivered}
            color="primary"
            name="will_delivered"
            onChange={(e) => {
              const value = {
                target: {
                  value: e.target.checked,
                  name: "will_delivered",
                },
              };
              handleOnChange(value);
            }}
          />
        }
        label="Eltip berme hyzmaty"
      />
      <br/>

    <FormControlLabel
        className={classes.sms}
        classes={{label:classes.itemLabel}}
        control={
          <Checkbox
            classes={{ root: classes.servicesCheckbox }}
            icon={<CheckBoxOutlineBlankOutlined className={classes.icon}/>}
            checkedIcon={<CheckBox className={classes.icon}/>}
            checked={is_hurry}
            color="primary"
            name="is_hurry"
            onChange={(e) => {
              const value = {
                target: {
                  value: e.target.checked,
                  name: "is_hurry",
                },
              };
              handleOnChange(value);
            }}
          />
        }
        label="Gyssagly"
      />
      <br/>
      <br/>
      {will_delivered&&<Alert severity="info" className={'h4'} style={{marginBottom:'10px'}}>
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Eltip bermek hyzmatyndan peýdalanmak — <strong>{props.docData[Number(props.dataDoc.docModeInfo)].delivery_amount} {props.docData[Number(props.dataDoc.docModeInfo)].currency}</strong>
                        </Alert>}

                        {is_hurry&&<Alert className={'h4'} severity="info">
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Gyssagly hyzmatyndan peýdalanmak — <strong>{props.docData[Number(props.dataDoc.docModeInfo)].hurry_amount} {props.docData[Number(props.dataDoc.docModeInfo)].currency}</strong>
                        </Alert>}

      <div style={{ textAlign: "center" }}>
        <Button
          style={{ marginRight: "15px" }}
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          className={props.backButton}
          onClick={handleBackSave}
        >
          Yza
        </Button>
        <Button variant="contained" color="primary" onClick={setData}>
          Indiki
        </Button>
      </div>
    </div>
  );
};

export default CardMore;
