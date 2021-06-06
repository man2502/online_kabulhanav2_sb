import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import NumberFormat from "react-number-format";
import useForm from "./../../../common/form-validate/useForm";
import { Autocomplete } from "@material-ui/lab";
import {
  CheckBox,
  CheckBoxOutlineBlankOutlined,
  Error,
  Warning,
} from "@material-ui/icons";

const MeetDateContainer = React.lazy(() =>
  import("./../../Infopage/MeetDate/MeetDateContainer")
);

const useStyles = makeStyles((theme) => ({
  textArea: {
    "&:hover": {
      // border:'1px solid #3f51b5',
      outline: "1px solid #000",
    },
    "&:focus, &:active": {
      border: "1px solid #35B835",
      outline: "1px solid #35B835",
    },
    border: "1px solid #ccc",
    width: "100%",
    borderRadius: "0px",
    padding: "18.5px 32px 18.5px 14px",
    lineHeight: "2",
    fontSize: "1rem",
  },
  sms: {
    width: "31%",
    // paddingRight:'15px',
    marginRight: "0",
  },
  wrapper:{
    maxWidth:'1440px',
    marginLeft:'auto',
     marginRight:'auto'
,        [theme.breakpoints.up('sm')]:{
        padding:'30px'
    }
}
}));

const CardUserDetail = (props) => {
  const classes = useStyles();
  const [date_errors_invite, set_date_errors_invite] = useState("");
  const stateSchema = {
    address: { value: "", error: "" },
    // workName: { value: '', error: '' },
    // salary: { value: '', error: '' },
    phone: { value: "", error: "" },
    homePhone: { value: "", error: "" },
    branch: { value: {}, error: "" },
    // workPosition:{value:'',error:''}
    inviteDate: { value: new Date(), error: "" },
    inviteTime: { value: "", error: "" },
    birthPlace: { value: "", error: "" },
    nameLatin: { value: "", error: "" },
    surnameLatin: { value: "", error: "" },
    note: { value: "", error: "" },
    secretWord: { value: "", error: "" },
    message: { value: false, error: "" },
  };
  const stateValidatorSchema = {
    address: {
      required: true,
    },
    // workName: {
    //     required: true,

    // },
    // workPosition:{
    //     required:true
    // },
    // salary: {
    //     required: true,
    //     validator: {
    //         func: value => /[^0][0-9]+/g.test(value),
    //         error: 'Aýlyk hakyny dogry giriziň'
    //     }

    // },
    phone: {
      required: true,
    },
    homePhone: {
      validator: {
        func: (value) => /^[0-9]{0,12}$/g.test(value),
        error: "Öý telefon belgisini dogry giriziň",
      },
    },
    inviteDate: {
      required: true,
    },
    inviteTime: {
      required: true,
    },
    branch: {
      required: true,
    },
    birthPlace: {
      required: true,
    },
    nameLatin: {
      required: true,
      validator: {
        func: (value) => /^[A-Z-a-z]{3,20}$/g.test(value),
        error: "Diňe latyn harplary",
      },
    },
    surnameLatin: {
      required: true,
      validator: {
        func: (value) => /^[A-Z-a-z]{3,20}$/g.test(value),
        error: "Diňe latyn harplary",
      },
    },
    secretWord: {
      // required: true,
      // validator:{
      //     fun: value => /^.{3,20}$/g.test(value)
      // }
    },
    message: {},
  };
  const { values, errors, dirty, handleOnChange } = useForm(
    stateSchema,
    stateValidatorSchema
  );

  const {
    address,
    birthPlace,
    phone,
    homePhone,
    // workPosition,
    nameLatin,
    surnameLatin,
    // salary,
    branch,
    inviteDate,
    inviteTime,
    note,
    message,
    secretWord,
  } = values;
  const { handleNext, register, setCollection, activeStep, handleBack, data } =
    props;

  const setData = () => {
    setCollection({ ...values });
    handleNext();
  };

  const cWidth = document.body.clientWidth > 411;

  const hasHistory =
    !!data.address &&
    // !!data.workName &&
    // !!data.workPosition &&
    !!data.birthPlace &&
    !!data.branch &&
    !!data.phone &&
    !!data.homePhone &&
    !!data.nameLatin &&
    !!data.surnameLatin;
  const history_address = hasHistory ? data.address : "";
  const history_birthPlace = hasHistory ? data.birthPlace : "";
  // const history_workPosition = hasHistory ? data.workPosition : ''
  // const history_salary = hasHistory ? data.salary : ''
  const history_branch = hasHistory ? data.branch : "";
  const history_phone = hasHistory ? data.phone : "";
  const history_homePhone = hasHistory ? data.homePhone : "";
  const history_inviteDate = hasHistory ? data.inviteDate : "";
  const history_inviteTime = hasHistory ? data.invitTime : "";
  const history_nameLatin = hasHistory ? data.nameLatin : "";
  const history_surnameLatin = hasHistory ? data.surnameLatin : "";

  useEffect(() => {
    if (hasHistory) {
      const valueAddress = {
        target: { value: history_address, name: "address" },
      };
      handleOnChange(valueAddress);

      // const valueWorkName = {
      //     target: { value: history_workName, name: 'workName' }
      // }
      // handleOnChange(valueWorkName)

      // const valueWorkPosition = {
      //     target: { value: history_workPosition, name: 'workPosition' }
      // }
      // handleOnChange(valueWorkPosition)

      // const valueSalary = {
      //     target: { value: history_salary, name: 'salary' }
      // }
      // handleOnChange(valueSalary)

      const valueBranch = {
        target: { value: history_branch, name: "branch" },
      };
      handleOnChange(valueBranch);

      const valuePhone = {
        target: { value: history_phone, name: "phone" },
      };
      handleOnChange(valuePhone);
      const valueInviteDate = {
        target: { value: history_inviteDate, name: "inviteDate" },
      };
      handleOnChange(valueInviteDate);

      const valueHomePhone = {
        target: { value: history_homePhone, name: "homePhone" },
      };
      handleOnChange(valueHomePhone);

      const valueInviteTime = {
        target: { value: history_inviteTime, name: "inviteTime" },
      };
      handleOnChange(valueInviteTime);
      const valueBirthPlace = {
        target: { value: history_birthPlace, name: "birthPlace" },
      };
      handleOnChange(valueBirthPlace);
      const valueNameLatin = {
        target: { value: history_nameLatin, name: "nameLatin" },
      };
      handleOnChange(valueNameLatin);
      const valueSurnameLatin = {
        target: { value: history_surnameLatin, name: "surnameLatin" },
      };
      handleOnChange(valueSurnameLatin);
    }
  }, [
    history_address,
    history_birthPlace,
    // history_workPosition,
    // history_salary,
    history_branch,
    history_inviteDate,
    history_phone,
    history_homePhone,
    history_inviteDate,
    history_inviteTime,
    history_nameLatin,
    history_surnameLatin,
  ]);

  const createLatin = (e, typeNumber) => {
    if (/^[A-Z-a-z]*$/g.test(e.target.value)) {
      const v = {
        target: {
          value: e.target.value.toLocaleUpperCase(),
          name: typeNumber,
        },
      };
      handleOnChange(v);
    }
  };

  // debugger
  // console.log(inviteDate)
  const handleBackSave = async () => {
    await setCollection({ ...values });
    handleBack();
  };

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={8} sm={8} xs={12}>
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
        <Grid item lg={4} md={4} sm={8} xs={12}>
          <Autocomplete
            id="combo-box-branchs"
            fullWidth
            options={props.branchsData}
            noOptionsText={"Beýle şahamça ýok"}
            getOptionLabel={(option) => option.name}
            // loading={true}
            onChange={(e, s) => {
              const value = {
                target: { value: s, name: "branch" },
              };
              handleOnChange(value);
            }}
            // value={branch}

            renderInput={(params) => (
              <TextField
                {...params}
                name="branch"
                label="Şahamçany saýlaň"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            name="nameLatin"
            variant="outlined"
            label="Ady (latyn harplary bilen)"
            fullWidth
            value={nameLatin}
            onChange={(e) => {
              createLatin(e, "nameLatin");
            }}
            error={errors.nameLatin && dirty.nameLatin}
          />
          {errors.nameLatin && dirty.nameLatin && (
            <span className="errors">{errors.nameLatin}</span>
          )}
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <TextField
            name="surnameLatin"
            variant="outlined"
            label="Familiýasy (latyn harplary bilen)"
            fullWidth
            value={surnameLatin}
            onChange={(e) => {
              createLatin(e, "surnameLatin");
            }}
            error={errors.surnameLatin && dirty.surnameLatin}
          />
          {errors.surnameLatin && dirty.surnameLatin && (
            <span className="errors">{errors.surnameLatin}</span>
          )}
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
        <FormControlLabel
        className={classes.sms}
        control={
          <Checkbox
            // classes={{ root: classes.servicesCheckbox }}
            icon={<CheckBoxOutlineBlankOutlined />}
            checkedIcon={<CheckBox />}
            checked={message}
            color="primary"
            name="message"
            onChange={(e) => {
              const value = {
                target: {
                  value: e.target.checked,
                  name: "message",
                },
              };
              handleOnChange(value);
            }}
          />
        }
        label="SMS-birikdirme"
      />
      <NumberFormat
        placeholder={"+993 (6 )"}
        style={{ width: "70%" }}
        error={errors.phone && dirty.phone}
        name="phone"
        value={phone}
        onChange={handleOnChange}
        customInput={TextField}
        variant={"outlined"}
        label="Telefon"
        format="+993 (6#) ##-##-##"
      />
      {/* {errors.phone&& dirty.phone && <span className='errors'>{errors.phone}</span>} */}
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
        <TextField
        name="birthPlace"
        variant="outlined"
        label="Doglan ýeri"
        fullWidth
        value={birthPlace}
        onChange={handleOnChange}
        error={errors.birthPlace && dirty.birthPlace}
      />
      {errors.birthPlace && dirty.birthPlace && (
        <span className="errors">{errors.birthPlace}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <MeetDateContainer
        docType={"card"}
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

        <Grid item lg={6} md={6} sm={6} xs={12}>
        <h5
        style={{
          textAlign: "left",
          marginTop: "18px",
          marginBottom: "15px",
          verticalAlign: "center",
          fontWeight: "normal",
        }}
      >
        <Error style={{ color: "red" }} /> Bank bilen habarlaşanyňyzda siziň
        anyklanmagyňyz üçin kod sözi
      </h5>
      
      <TextField
        name="secretWord"
        variant="outlined"
        label="Gizlin söz"
        fullWidth
        value={secretWord}
        onChange={handleOnChange}
        error={errors.secretWord && dirty.secretWord}
      />
      {errors.secretWord && dirty.secretWord && (
        <span className="errors">{errors.secretWord}</span>
      )}
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
        <TextareaAutosize
        rowsMin={3}
        className={classes.textArea}
        rowsMax={10}
        name="note"
        onChange={handleOnChange}
        placeholder="Bellik..."
      />
        </Grid>
      </Grid>
      <br/><br/>

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
        {!errors.address &&
        !errors.birthPlace &&
        !errors.homePhone &&
        !errors.inviteDate &&
        inviteDate !== "Invalid Date" &&
        inviteDate !== null &&
        !errors.inviteTime &&
        !errors.secretWord &&
        // !errors.experience &&
        !errors.phone ? (
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

export default CardUserDetail;
