import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import useForm from "./../../../common/form-validate/useForm";
import ConfirmInfo from "src/views/base/confirmInfo/ConfirmInfo";
import { dateWorking } from "src/common/dateWorking";
import MeetDateContainer from "src/views/Infopage/MeetDate/MeetDateContainer";
import { Alert, AlertTitle } from "@material-ui/lab";


const useStyles = makeStyles((theme) =>({
  wrapper:{
    maxWidth:'1440px',
    marginLeft:'auto',
     marginRight:'auto'
,        [theme.breakpoints.up('sm')]:{
        padding:'30px'
    }
  }
}))

const CreditUserDetail = (props) => {
  const [date_errors_invite, set_date_errors_invite] = useState("");
  const classes = useStyles()
  const stateSchema = {
    address: { value: "", error: "" },
    workName: { value: "", error: "" },
    salary: { value: "", error: "" },
    phone: { value: "", error: "" },
    homePhone: { value: "", error: "" },
    experience: { value: "", error: "" },
    workPosition: { value: "", error: "" },
    inviteDate: { value: new Date(), error: "" },
    inviteTime: { value: "", error: "" },
  };
  const stateValidatorSchema = {
    address: {
      required: true,
    },
    workName: {
      required: true,
    },
    workPosition: {
      required: true,
    },
    salary: {
      required: true,
      validator: {
        func: (value) => {
          return Number(value) >= Number(props.dataL.monthPay);
        },
        error: "Aýlyk hakynynyň möçberi ýeterlikli däl",
      },
    },
    phone: {
      required: true,
    },
    homePhone: {
      validator: {
        func: (value) => /^[0-9]{0,12}$/g.test(value),
        error: "Öý telefon belgisini dogry giriziň",
      },
    },
    experience: {
      required: true,
    },
    inviteDate: {
      required: true,
    },
    inviteTime: {
      required: true,
    },
  };
  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const {
    address,
    workName,
    phone,
    homePhone,
    workPosition,
    salary,
    experience,
    inviteDate,
    inviteTime,
  } = values;
  const {
    handleNext,
    setCollection,
    activeStep,
    handleBack,
    data,
    callback,
    openConfirm,
    setOpenConfirm,
  } = props;

  // props.setCollection(values)

  function setData() {
    callback({ ...values });
    // setCollection({...values})
    // console.log('fgdgdgfd')
  }

  const handleClose = () => {
    setOpenConfirm(false);
  };
  const agree = async () => {
    await props.onSubmit();
    setOpenConfirm(false);
    // console.log(values)
    handleNext();
  };

  const cWidth = document.body.clientWidth > 411;

  const hasHistory =
    !!data.address &&
    !!data.workName &&
    !!data.workPosition &&
    !!data.salary &&
    !!data.experience &&
    !!data.phone &&
    !!data.homePhone;
  const history_address = hasHistory ? data.address : "";
  const history_workName = hasHistory ? data.workName : "";
  const history_workPosition = hasHistory ? data.workPosition : "";
  const history_salary = hasHistory ? data.salary : "";
  const history_experience = hasHistory ? data.experience : "";
  const history_phone = hasHistory ? data.phone : "";
  const history_homePhone = hasHistory ? data.homePhone : "";
  const history_inviteDate = hasHistory ? data.inviteDate : "";
  const history_inviteTime = hasHistory ? data.invitTime : "";

  useEffect(() => {
    if (hasHistory) {
      const valueAddress = {
        target: { value: history_address, name: "address" },
      };
      handleOnChange(valueAddress);

      const valueWorkName = {
        target: { value: history_workName, name: "workName" },
      };
      handleOnChange(valueWorkName);

      const valueWorkPosition = {
        target: { value: history_workPosition, name: "workPosition" },
      };
      handleOnChange(valueWorkPosition);

      const valueSalary = {
        target: { value: history_salary, name: "salary" },
      };
      handleOnChange(valueSalary);

      const valueExperience = {
        target: { value: history_experience, name: "experience" },
      };
      handleOnChange(valueExperience);

      const valuePhone = {
        target: { value: history_phone, name: "phone" },
      };
      handleOnChange(valuePhone);

      const valueHomePhone = {
        target: { value: history_homePhone, name: "homePhone" },
      };
      handleOnChange(valueHomePhone);
    }
  }, [
    history_address,
    history_workName,
    history_workPosition,
    history_salary,
    history_experience,
    history_phone,
    history_homePhone,
    history_inviteDate,
    history_inviteTime,
  ]);

  const createConfirmInfo = {
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
      { value: "Ýaşaýan salgysy:", name: props.ownData.address },
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
      { value: "Iş ýeri:", name: props.ownData.workName },
      { value: "Wezipesi:", name: props.ownData.workPosition },
      { value: "Aýlygyň möçberi: ", name: props.ownData.salary },
      { value: "Iş tejribesi: ", name: props.ownData.experience },
      { value: "Telefon:", name: props.ownData.phone },
      { value: "Öý telefony", name: props.ownData.homePhone },
      { value: "Karz möçberi:", name: props.dataL.creditSum + " TMT" },
      { value: "Möhleti:", name: props.dataL.time + "aý" },
      {
        value: "Banka barmaly wagtyňyz: ",
        name: props.ownData.inviteDate
          ? dateWorking().createDate(props.ownData.inviteDate) +
            " " +
            props.ownData.inviteTime +
            ":00"
          : "",
      },
    ],
  };
  const handleBackSave = async () => {
    await setCollection({ ...values });
    handleBack();
  };
  // debugger
  return (
    <div className={classes.wrapper}>

      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <TextField
        name="address"
        variant="outlined"
        label="Ýaşaýan salgysy"
        fullWidth
        value={address}
        onChange={handleOnChange}
        error={errors.address && dirty.address}
      />
      {errors.address && dirty.address && (
        <span className="errors">{errors.address}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <TextField
        name="workName"
        variant="outlined"
        label="Iş ýeri"
        fullWidth
        value={workName}
        onChange={handleOnChange}
        error={errors.workName && dirty.workName}
      />
      {errors.workName && dirty.workName && (
        <span className="errors">{errors.workName}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <TextField
        name="salary"
        type="number"
        variant="outlined"
        label="Aýlyk haky"
        fullWidth
        value={salary}
        onChange={handleOnChange}
        error={errors.salary && dirty.salary}
      />
      {errors.salary && dirty.salary && (
        <span className="errors">{errors.salary}</span>
      )}
      {Number(props.dataL.monthPay) > salary / 2 &&
      Number(props.dataL.monthPay) <= salary ? (
        <Alert
          severity="info"
          className={"h4"}
          style={{ marginBottom: "10px", marginTop: "15px" }}
        >
          <AlertTitle
            className={"h4"}
            style={{ textAlign: "left", fontWeight: "bold" }}
          >
            Üçünji tarapyň zamunlygy
          </AlertTitle>
          <div>
            Karz alyjy bilen bir hojalygy ýöretmeýän, ygtybarly we durnukly
            girdejisi bolan, karz bergisi bolmadyk we başga şahslar üçin zamun
            bolup çykyş etmeýän, raýatyň zamunlygy kabul edilýär
          </div>
        </Alert>
      ) : (
        <br />
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <TextField
        name="workPosition"
        variant="outlined"
        label="Wezipesi"
        fullWidth
        value={workPosition}
        onChange={handleOnChange}
        error={errors.workPosition && dirty.workPosition}
      />
      {errors.workPosition && dirty.workPosition && (
        <span className="errors">{errors.workPosition}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <NumberFormat
        placeholder={"+993 (6 )"}
        error={errors.phone && dirty.phone}
        name="phone"
        value={phone}
        onChange={handleOnChange}
        customInput={TextField}
        variant={"outlined"}
        label="Telefon"
        fullWidth
        format="+993 (6#) ##-##-##"
      />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <NumberFormat
        placeholder={""}
        name="homePhone"
        error={errors.homePhone && dirty.homePhone}
        fullWidth
        value={homePhone}
        onChange={handleOnChange}
        customInput={TextField}
        fullWidth
        variant={"outlined"}
        label="Öý-telefony"
      />
      {errors.homePhone && dirty.homePhone && (
        <span className="errors">{errors.homePhone}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <NumberFormat
        placeholder={"6 aý"}
        name="experience"
        error={errors.experience && dirty.experience}
        fullWidth
        value={experience}
        onChange={handleOnChange}
        customInput={TextField}
        fullWidth
        variant={"outlined"}
        label="Soňky iş ýeri boýunça tejribesi"
      />
      {errors.experience && dirty.experience && (
        <span className="errors">{errors.experience}</span>
      )}
        </Grid>
        <Grid item justify={'center'} lg={6} md={6} sm={6} xs={12}>
        <MeetDateContainer
        docType={"credit"}
        handleOnChange={handleOnChange}
        inviteDate={inviteDate}
        invitTime={inviteTime}
        dirty={dirty}
        date_errors_invite={date_errors_invite}
        set_date_errors_invite={set_date_errors_invite}
        hasHistory={hasHistory}
        history_inviteDate={history_inviteDate}
      />
        </Grid>

       
      </Grid>
      <ConfirmInfo
        open={openConfirm}
        onSubmit={props.onSubmit}
        dataDoc={props.dataDoc}
        data={createConfirmInfo}
        handleClose={handleClose}
        agree={agree}
        cWidth={cWidth}
        backButton={props.backButton}
      />

   
    
     
     

      <br />
      <br />
      <div style={{textAlign:'center'}}>
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
      {!errors.address &&
      !errors.workName &&
      !errors.homePhone &&
      !errors.salary &&
      !errors.experience &&
      !errors.inviteDate &&
      inviteDate !== "Invalid Date" &&
      inviteDate !== null &&
      !errors.inviteTime &&
      !errors.phone &&
      !errors.homePhone ? (
        <Button variant="contained" color="primary" onClick={setData}>
          Indiki
        </Button>
      ) : (
        <Button variant="contained" color="primary" disabled>
          Indiki
        </Button>
      )}

      </div>
    </div>
  );
};

export default CreditUserDetail;
