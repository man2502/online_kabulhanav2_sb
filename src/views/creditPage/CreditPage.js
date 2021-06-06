
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import RoomContainer from "../docsPage/Room/RoomContainer"

import s from './CreditPage.module.css'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CreditUserDetail from "./source/CreditUserDetail"
import { ColorlibConnector, useColorlibStepIconStyles } from "src/common/style/MultiStepper"
import { AllInbox, AssignmentInd,  Description, ListAlt, Payment } from "@material-ui/icons"
import clsx from "clsx"

import PropTypes from "prop-types";
import { Loading } from "src/App"
import OfferSuccess from "../base/offer-success/OfferSuccess"
import OfferError from "../base/offer-error/OfferError"
import CreditType from "./source/CreditType";
import Calc from "./Calc/Calc";
import classes from "./CreditPage.module.css";
import PostUserData from "../base/postUserData/PostUserData";
import SelectionContainer from "../Infopage/Selection/SelectionContainer";
import { useTranslation } from "react-i18next";
import { partsStyle, sbColors } from "src/common/config";
// const Ecard = React.lazy(() => import('../Infopage/Ecard/Ecard'))



function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ListAlt style={{ fontSize: '2.7rem' }} />,
        2: <Payment style={{ fontSize: '2.7rem' }} />,
        3: <AssignmentInd style={{ fontSize: '2.7rem' }} />,
        4: <Description style={{ fontSize: '2.7rem' }} />,
        5: <AllInbox style={{ fontSize: '2.7rem' }} />,
        // 6: <AllInbox style={{ fontSize: '2rem' }} />
        
    }

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
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
    icon: PropTypes.node
};

/////////////////////////////
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        
    },
    success:{
        // width: '50%',
        // [theme.breakpoints.between('sm', 'lg')]: {
        //     width: '50%'
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '100%'
        // },
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    stepperWrapper:{
        display:'flex',
        borderBottom:'2px solid #ddd',
        marginBottom:'20px',
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }
    },
    dialogWrapper:{
        // width:'60%',
        // [theme.breakpoints.down('sm')]:{
        //   width:'80%'
        // },
        // [theme.breakpoints.down('xs')]:{
        //   width:'90%'
        // }
    },
    connector:{
        [theme.breakpoints.down('xs')]:{
            visibility:'hidden'
        }
    },
    stepLabel:{
        [theme.breakpoints.down('xs')]:{
            display:'none',
            
        }
    },
    activeStep:{
        [theme.breakpoints.down('xs')]:{
            display:'flex',
            justifyContent:'center',
            visibility:'visible',
            
        }
    },
}));


function getSteps() {
    return ['Karzyň görnüşini saýlaň','Karz hasaplaýjy','Şahsy maglumatlary giriziiň', 'Karz üçin maglumatlar',  'Ugratmak'];
}
const CreditPage = (props) => {
    const {t, i18n} = useTranslation()
    const {  control,   register } = useForm()
    const [collection, setCollection] = useState({})
    const [collectionCalc, setCollectionCalc] =useState({})
    const [collectionDetail, setCollectionDetail] = useState({})
    const [collectionUserDetail, setCollectionUserDetail] = useState({})
    const [open, setOpen] = React.useState(false);
    const [openConfirm, setOpenConfirm] = React.useState(false);
    // debugger
  
    function getStepContent(stepIndex) {
        switch (stepIndex) {

            case 0: return <SelectionContainer titles={titles} isDoc={false} isCard={false} collection={collection} component={CreditType} control={control} docData={props.docModeData} activeStep={activeStep} setCollection={setCollection} handleBack={handleBack} backButton={classesNext.backButton} handleNext={handleNext} />

            case 1: return <Calc data={collectionCalc} docData={props.docModeData[collection.docModeInfo-1]} backButton={classes.backButton} setCollectionCalc={setCollectionCalc} register={register} activeStep={activeStep}  handleBack={handleBack} handleNext={handleNext} />
            
            case 2: return  <PostUserData data={collectionDetail} passportSeries={props.passportSeries} register={register} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} handleNext={handleNext} setCollection={setCollectionDetail} />

            case 3: return <CreditUserDetail ownData={collectionUserDetail} dataDoc={collection} callback={callbackFunction} setOpenConfirm={setOpenConfirm} openConfirm={openConfirm} onSubmit={onSubmit} data={collectionUserDetail} register={register} dataF={collectionDetail} dataS={collectionUserDetail} dataL={collectionCalc} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} handleNext={handleNext} setCollection={setCollectionUserDetail}/>

            // case 3: return <Ecard onSubmit={onSubmit} dataF={collection} dataS={collectionDetail} dataT={collectionUserDetail} handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} />

            default:
                return
        }
    }


    // const thisDate = new Date()
    // const currentMonth = thisDate.getMonth()+1
    // const currentDate = thisDate.getDate().toString() +'-'+ currentMonth.toString() +'-'+ thisDate.getFullYear().toString()

    const classesNext = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

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
        headerTitle: t('onlineLoanApplication'),
        buttonTitle: t('sendRequest'),
        noDoc: t('noApplications'),
        selectDoc: t('selectTypeCredit')

    }
    

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = async() => {
        setOpen(false);
        await setCollection({})
        await setCollectionCalc({})
        await setCollectionDetail({})
        await setCollectionUserDetail({})
    };

    const callbackFunction = (value) => {
        setCollectionUserDetail(value)
        setOpenConfirm(true)
    }
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            // width: document.documentElement.clientWidth * 50 / 100
        },
        closeButton: {
            position: 'absolute',
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
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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
    // debugger
        const arr = {
            docMode: collection.docMode, 
            name: collectionDetail.name, 
            surname: collectionDetail.surname, 
            thirdName: collectionDetail.thirdName,
            birthDay:collectionDetail.birthDay,
            passportDate:collectionDetail.passportDate, 
            passport:collectionDetail.passport_first +'-'+ collectionDetail.passport_second+collectionDetail.passport,
            passportGiven: collectionDetail.passportGiven,
            address: collectionUserDetail.address, 
            workName: collectionUserDetail.workName, 
            salary: collectionUserDetail.salary, 
            credit:collectionCalc.creditSum, 
            phone: collectionUserDetail.phone, 
            homePhone:collectionUserDetail.homePhone,
            experience:collectionUserDetail.experience,
            workPosition:collectionUserDetail.workPosition,
            preparedDate:collectionUserDetail.inviteDate,
            preparedTime:collectionUserDetail.inviteTime
        }
        var data = {
            data:arr,
            path: '/org/offer-credit'
        }
        await props.postActionThunk(data)
        await setCollection({})
        await setCollectionCalc({})
        await setCollectionDetail({})
        await setCollectionUserDetail({})
        // console.log(arr)
        handleNext()

    }
    
    return (
        <div className={s.wrapper}>
            {props.isFetching ? <Loading /> : ''}
            <RoomContainer docToggle={setOpen} titles={titles} offeredData={props.offeredDocData} />
            <br />

            <Dialog onClose={activeStep!==steps.length?handleClose:''} aria-labelledby="customized-dialog-title" fullScreen={activeStep!==steps.length} fullWidth open={open} classes={{paper:classesNext.dialogWrapper}} >
                <DialogTitle id="customized-dialog-title" style={partsStyle.dialog.header} onClose={activeStep!==steps.length?() => {
                    handleClose()
                    handleReset()
                }:''}>
                    {titles.headerTitle}
                </DialogTitle>

                <DialogContent dividers>
                    <div>
                        {/* <Container> */}
                            <div className={classesNext.root} >
                            {activeStep !== steps.length ?
                                        <Stepper activeStep={activeStep} alternativeLabel={true} className={classesNext.stepperWrapper}>
                                            {steps.map((label) => (
                                                <Step key={label}  connector={<ColorlibConnector className={classesNext.connector}/>} >
                                                    <StepLabel classes={{label:classesNext.stepLabel,active:classesNext.activeStep}} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper> :
                                        <div style={{ textAlign: 'center', width: '100%' }}>
                                        </div>
                                    }
                                <div className={activeStep ===5? classesNext.success:''}>
                                    {activeStep !== steps.length ?
                                        <div>
                                            <Typography className={classesNext.instructions} >
                                                {getStepContent(activeStep)}
                                            </Typography>

                                            <div style={{ marginTop: '15px' }}>
                                                {/* {activeStep === steps.length-1 ? <Button variant="contained" color="primary" type='submit' onClick={()=>{onSubmit(collection, collectionDetail,collectionUserDetail)}}>Finish</Button> : */}
                                                {/* ''} */}
                                                {/* {activeStep === steps.length - 1 && <div>
                                                    {/* <div className={'h2'} style={{ textTransform:'uppercase',border:'2px solid #3f51b5',padding:'10px',borderRadius:'10px',width: '100%', marginBottom: '20px', textAlign: 'center' }}>Siz maglumatlary ugratmagy tassyklaýarsyňyzmy?</div>
                                                    <br/>
                                                    <Button style={{ marginRight: '15px' }} variant="contained" disabled={activeStep === 0} className={classesNext.backButton} onClick={handleBack}>Yza</Button>
                                                    <Button variant="contained" color="primary" onClick={() => { onSubmit(collection, collectionDetail, collectionUserDetail) }}>Ugratmak</Button> */}
                                                {/* </div> */}

                                            </div>
                                        </div> : (
                                            <Typography className={classesNext.instructions}>
                                                {props.contacts.length > 0 ?
                                                    <OfferSuccess data={props.offeredDocData} contacts={props.contacts} getUserDataThunk={props.getUserDataThunk} handleReset={handleReset} setOpen={setOpen} /> :
                                                    <OfferError handleReset={handleReset} setOpen={setOpen} />
                                                }

                                            </Typography>
                                        )
                                    }
                                </div>
                            </div>
                        {/* </Container> */}

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreditPage





