import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import RoomContainer from "../docsPage/Room/RoomContainer";
import s from "./CardsPage.module.css";

import { makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Step, StepLabel, Stepper } from "@material-ui/core";

import clsx from "clsx";
import PropTypes from "prop-types";
import {
  ColorlibConnector,
  useColorlibStepIconStyles,
} from "src/common/style/MultiStepper";
import { AllInbox, AssignmentInd, ListAlt, Payment } from "@material-ui/icons";
import { Loading } from "src/App";
import OfferSuccess from "../base/offer-success/OfferSuccess";
import OfferError from "../base/offer-error/OfferError";

import CardType from "./source/CardType";
import PostUserData from "./../base/postUserData/PostUserData";
import CardUserDetail from "./source/CardUserDetail";
import SelectionContainer from "../Infopage/Selection/SelectionContainer";
import CardMore from "./source/CardMore";
import { useTranslation } from "react-i18next";
import { partsStyle } from "src/common/config";


const Ecard = React.lazy(() => import("../Infopage/Ecard/Ecard"));

function ColorlibStepIcon(props) {

  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ListAlt style={{ fontSize: "2.7rem" }} />,
    2: <AssignmentInd style={{ fontSize:"2.7rem" }} />,
    3: <Payment style={{ fontSize: "2.7rem" }} />,
    4: <Payment style={{ fontSize: "2.7rem" }} />,
    5: <Payment style={{ fontSize: "2.7rem" }} />,
    6: <AllInbox style={{ fontSize: "2.7rem" }} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

/////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // outline:'2px solid red'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  success: {
    width: "50%",
    [theme.breakpoints.between("sm", "lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    marginLeft: "auto",
    marginRight: "auto",
  },
  stepperWrapper: {
    display: "flex",
    borderBottom: "2px solid #ddd",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  dialogWrapper: {
    // width: "60%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "80%",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "90%",
    // },
  },
  connector: {
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  stepLabel: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  activeStep: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      visibility: "visible",
    },
  },
}));


const CardsPage = (props) => {
  const { t, i18n } = useTranslation();


function getSteps() {
  return [
    t('select_type_of_loan'),
    t('input_private_info'),
    t("info_for_loan"),
    "Goşmaça maglumatlar",
    "Tölegiň görnüşini saýlaň",
    t('toSend')
  ];
}
  const { handleSubmit, control, register } = useForm();
  const [collection, setCollection] = useState({});
  const [collectionDetail, setCollectionDetail] = useState({});
  const [collectionUserDetail, setCollectionUserDetail] = useState({});
  const [collectionMore, setCollectionMore] = useState({});

  const [activeCard, setActiveCard] = useState(null);

  // const activeCard = useRef(null)
  // useEffect(()=>{

  // },[activeCard.current])

  // const setActiveCard = (value) =>{
  //     activeCard.current = value
  // }
  

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <SelectionContainer
            titles={titles}
            isCard={true}
            collection={collection}
            component={CardType}
            control={control}
            docData={props.docModeData}
            activeStep={activeStep}
            setCollection={setCollection}
            handleBack={handleBack}
            backButton={classesNext.backButton}
            handleNext={handleNext}
          />
        );

      case 1:
        return (
          <PostUserData
            data={collectionDetail}
            titles={titles}
            passportSeries={props.passportSeries}
            register={register}
            handleBack={handleBack}
            activeStep={activeStep}
            backButton={classesNext.backButton}
            handleNext={handleNext}
            setCollection={setCollectionDetail}
          />
        );

      case 2:
        return (
          <CardUserDetail
            ownData={collectionUserDetail}
            branchsData={props.branchsData}
            data={collectionUserDetail}
            docData={props.docModeData}
            register={register}
            dataF={collectionDetail}
            dataDoc={collection}
            handleBack={handleBack}
            activeStep={activeStep}
            backButton={classesNext.backButton}
            handleNext={handleNext}
            setCollection={setCollectionUserDetail}
          />
        );

      case 3:
        return (
         <CardMore 
            ownData={collectionMore}
            branchsData={props.branchsData}
            data={collectionUserDetail}
            docData={props.docModeData}
            register={register}
            dataF={collectionDetail}
            dataDoc={collection}
            handleBack={handleBack}
            activeStep={activeStep}
            backButton={classesNext.backButton}
            handleNext={handleNext}
            setCollection={setCollectionMore}
         
         />
        );
      case 4:
        return (
          <Ecard
            onSubmit={onSubmit}
            dataF={collection}
            dataS={collectionDetail}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
    }
  }

  const classesNext = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const pdfData = useRef({});
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const titles = {
    headerTitle: "Täze kart almak üçin ýüzlenme",
    buttonTitle: "Ýüzlenme ugratmak",
    noDoc: "Kart almak üçin tabşyrlan ýüzlenme ýok",
    selectDoc: "Kartyň görnüşini saýlaň",
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    await setCollection({});
    await setCollectionDetail({});
    await setCollectionUserDetail({});

    setOpen(false);
  };
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
      // width: document.documentElement.clientWidth * 50 / 100,
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

  const onSubmit = async () => {
    const arr = {
      docMode: collection.docMode,
      name: collectionDetail.name,
      surname: collectionDetail.surname,
      thirdName: collectionDetail.thirdName,
      birthDay: collectionDetail.birthDay,
      passportDate: collectionDetail.passportDate,
      passport:
        collectionDetail.passport_first +
        "-" +
        collectionDetail.passport_second +
        collectionDetail.passport,
      passportGiven: collectionDetail.passportGiven,
      address: collectionUserDetail.address,
      will_delivered: collectionMore.will_delivered,
      is_hurry: collectionMore.is_hurry,
      // workName: collectionUserDetail.workName,
      // salary: collectionUserDetail.salary,
      phone: collectionUserDetail.phone,
      birthPlace: collectionUserDetail.birthPlace,
      homePhone: collectionUserDetail.homePhone,
      preparedDate: collectionUserDetail.inviteDate,
      preparedTime: collectionUserDetail.inviteTime,
      branch_id: collectionUserDetail.branch.id,
      nationality: collectionDetail.nationality,
      gender: collectionDetail.gender,
      nameLatin: collectionUserDetail.nameLatin,
      surnameLatin: collectionUserDetail.surnameLatin,
      note: collectionUserDetail.note,
      secretWord: collectionUserDetail.secretWord,
      message: collectionMore.message,
      // workPosition:collectionUserDetail.workPosition
    };
    // debugger
    const data = {
        data: arr,
        path: "/org/offer-card",
    };
    await props.postActionThunk(data);
    await setCollection({});
    await setCollectionDetail({});
    await setCollectionUserDetail({});
    
    handleNext();
};
// debugger;
  

  return (
    <div className={s.wrapper}>
      {props.isFetching ? <Loading /> : ""}
      <RoomContainer
        docToggle={setOpen}
        titles={titles}
        offeredData={props.offeredDocData}
      />
      <br />

      <Dialog
        onClose={activeStep !== steps.length ? handleClose : ""}
        aria-labelledby="customized-dialog-title"
        fullScreen={activeStep!==steps.length}
        fullWidth
        // maxWidth={"sm"}
        open={open}
        classes={{ paper: classesNext.dialogWrapper }}
      >
        <DialogTitle

          id="customized-dialog-title"
          style={partsStyle.dialog.header}
          onClose={
            activeStep !== steps.length
              ? () => {
                  handleClose();
                  handleReset();
                }
              : ""
          }
        >
          {titles.headerTitle}
        </DialogTitle>

        <DialogContent dividers>
          <div>
            {/* <Container> */}
            <div className={classesNext.root}>
              {activeStep !== steps.length ? (
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel={true}
                  className={classesNext.stepperWrapper}
                >
                  {steps.map((label) => (
                    <Step
                      key={label}
                      connector={
                        <ColorlibConnector className={classesNext.connector} />
                      }
                    >
                      <StepLabel
                        classes={{
                          label: classesNext.stepLabel,
                          active: classesNext.activeStep,
                        }}
                        StepIconComponent={ColorlibStepIcon}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              ) : (
                <div style={{ textAlign: "center", width: "100%" }}></div>
              )}
              <div className={activeStep === 0||activeStep === 1||activeStep === 2?  "" :classesNext.success}>
                {activeStep !== steps.length? (
                  <div>
                    <Typography className={classesNext.instructions}>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {getStepContent(activeStep)}
                      </form>
                    </Typography>

                    <div style={{ marginTop: "15px" }}>
                      {/* {activeStep === steps.length - 1 ? <Button variant="contained" color="primary" type='submit' onClick={()=>{onSubmit(collection, collectionDetail)}}>Finish</Button> :
                                                ''} */}
                    </div>
                  </div>
                ) : (
                  <Typography
                    className={classesNext.instructions}
                    
                  >
                    {props.contacts.length > 0 ? (
                      <OfferSuccess
                        data={props.offeredDocData}
                        contacts={props.contacts}
                        getUserDataThunk={props.getUserDataThunk}
                        handleReset={handleReset}
                        setOpen={setOpen}
                      />
                    ) : (
                      <OfferError handleReset={handleReset} setOpen={setOpen} />
                    )}
                  </Typography>
                )}
              </div>
            </div>
            {/* </Container> */}
          </div>
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default CardsPage;
