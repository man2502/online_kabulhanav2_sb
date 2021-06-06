
import React, { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import RoomContainer from "./Room/RoomContainer"
import s from './DocsPage.module.css'

import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Checkbox, FormControlLabel, FormGroup, Step, StepLabel, Stepper, Switch } from "@material-ui/core"
import clsx from "clsx"
import PropTypes from "prop-types";
import { ColorlibConnector, useColorlibStepIconStyles } from "src/common/style/MultiStepper"
import { AllInbox, AssignmentInd, CheckBox, CheckBoxOutlineBlankOutlined, ListAlt, Payment } from "@material-ui/icons"
import { Loading } from "src/App"
import OfferSuccess from "../base/offer-success/OfferSuccess"
import OfferError from "../base/offer-error/OfferError"
import PostUserData from '../base/postUserData/PostUserData'
import DocType from "./source/DocType"
import DocUserDetail from "./source/DocUserDetail"
import SelectionContainer from "../Infopage/Selection/SelectionContainer"
import { Alert, AlertTitle } from "@material-ui/lab"
import { partsStyle, sbColors } from "src/common/config";

const Ecard = React.lazy(() => import('../Infopage/Ecard/Ecard'))

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <ListAlt style={{ fontSize: '2.7rem' }} />,
        2: <AssignmentInd style={{ fontSize: '2.7rem' }} />,
        3: <Payment style={{ fontSize: '2.7rem' }} />,
        4: <Payment style={{ fontSize: '2.7rem' }} />,
        5: <AllInbox style={{ fontSize: '2.7rem' }} />

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
        width: '50%',
        [theme.breakpoints.between('sm', 'lg')]: {
            width: '50%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        marginLeft: 'auto',
        marginRight: 'auto'

    },
    stepperWrapper: {
        display: 'flex',
        borderBottom: '2px solid #ddd',
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    dialogWrapper: {
        // width: '60%',
        // [theme.breakpoints.down('sm')]: {
        //     width: '80%'
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '90%'
        // }
    },
    connector: {
        [theme.breakpoints.down('xs')]: {
            visibility: 'hidden'
        }
    },
    stepLabel: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',

        }
    },
    activeStep: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            visibility: 'visible',

        }
    },
    checkboxIcon: {
        fontSize: '2rem',
        color:theme.palette.main
    },
    checkboxLabel: {
        fontSize: '1.5rem',
        color:theme.palette.main

    },
    servicePanel:{
        // maxWidth:'1440px',
        // marginLeft:'auto',
        // marginRight:'auto',
        textAlign:'center',
        // backgroundColor: 'green',
        border:'2px solid #35B835',
        borderRadius:'7px',
        padding:'10px'
    }
}));



function getSteps() {
    return ['Güwanamanyň görnüşini saýlaň', 'Şahsy maglumatlary giriziň', 'Güwanama üçin maglumatlar', 'Tölegiň görnüşini saýlaň', 'Ugratmak'];
}


const DocsPage = (props) => {
    const { handleSubmit, control, register } = useForm()
    const [collection, setCollection] = useState({})
    const [collectionDetail, setCollectionDetail] = useState({})
    const [collectionUserDetail, setCollectionUserDetail] = useState({})

    const [isBusinessman, setIsBusinessman] = useState(false)
    const [isHurry, setIsHurry] = useState(false)

    // const activeCard = useRef(null)
    // useEffect(()=>{

    // },[activeCard.current])

    // const setActiveCard = (value) =>{
    //     activeCard.current = value
    // }

// debugger

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <div>
                    <div className={classesNext.servicePanel}>
                        <FormGroup row style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FormControlLabel
                                classes={{ root: classesNext.checkboxs, label: classesNext.checkboxLabel }}
                                control={
                                    <Checkbox
                                        classes={{ root: classesNext.servicesCheckbox }}
                                        icon={<CheckBoxOutlineBlankOutlined classes={{ root: classesNext.checkboxIcon }} />}
                                        checkedIcon={<CheckBox classes={{ root: classesNext.checkboxIcon }} />}
                                        checked={isHurry}
                                        color="primary"
                                        name='isHurry'
                                        onChange={(e) => { setIsHurry(e.target.checked) }}
                                    />
                                }
                                label='Gyssagly'
                            />

                            <FormControlLabel
                                classes={{ root: classesNext.checkboxs, label: classesNext.checkboxLabel }}
                                control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankOutlined classes={{ root: classesNext.checkboxIcon }} />}
                                        checkedIcon={<CheckBox classes={{ root: classesNext.checkboxIcon }} />}
                                        checked={isBusinessman}
                                        color="primary"
                                        name='will_delivered'
                                        onChange={(e) => { setIsBusinessman(e.target.checked) }}
                                    />
                                }
                                label='Siz telekeçimi'
                            />

                        </FormGroup>
                    </div>
                    <div style={{
                        maxWidth:'1440px',
                        marginLeft:"auto",
                        marginRight:'auto',
                        textAlign:'center'
                    }}>
                    {isBusinessman&&<Alert severity="info" className={'h4'} style={{marginBottom:'10px'}}>
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Telekeçimi — <strong>10 TMT</strong>
                        </Alert>}
                        {isHurry&&<Alert className={'h4'} severity="info">
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Gyssagly hyzmatyndan peýdalanmak — <strong>{props.docModeData.length>0?props.docModeData[0].hurry_amount:'0'} TMT</strong>
                        </Alert>}

                    </div>
                    <br />
                    <SelectionContainer titles={titles} isCard={false} collection={collection} component={DocType} control={control} docData={props.docModeData} activeStep={activeStep} setCollection={setCollection} handleBack={handleBack} backButton={classesNext.backButton} handleNext={handleNext} />
                </div>


            case 1:
                return <PostUserData data={collectionDetail} titles={titles} passportSeries={props.passportSeries} register={register} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} handleNext={handleNext} setCollection={setCollectionDetail} />
            case 2:
                return <DocUserDetail isHurry={isHurry} isBusinessman={isBusinessman} docData={props.docModeData} data={collectionUserDetail} register={register} dataF={collectionDetail} dataDoc={collection} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} handleNext={handleNext} setCollection={setCollectionUserDetail} />
            // return <CardDetail passportSeries={props.passportSeries} titles={titles} register={register} dataF={collectionDetail} handleBack={handleBack} activeStep={activeStep} backButton={classesNext.backButton} handleNext={handleNext} setCollection={setCollectionDetail} handleNext={handleNext} />
            case 3:
                return <Ecard onSubmit={onSubmit} dataF={collection} dataS={collectionDetail} handleNext={handleNext} handleBack={handleBack} />
            default:

        }
    }




    const classesNext = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const pdfData = useRef({})
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
        headerTitle: 'Güwanama üçin ýüzlenme',
        buttonTitle: 'Ýüzlenme ugratmak',
        noDoc: 'Güwanama üçin tabşyrlan ýüzlenme ýok',
        selectDoc: 'Güwanamanyň görnüşini saýlaň'

    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = async () => {
        await setCollection({})
        await setCollectionDetail({})
        await setCollectionUserDetail({})

        setOpen(false);
    };
    const styles = (theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
            // width: document.documentElement.clientWidth * 50 / 100,


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
        const arr = {
            docMode: collection.docMode,
            name: collectionDetail.name,
            surname: collectionDetail.surname,
            thirdName: collectionDetail.thirdName,
            birthDay: collectionDetail.birthDay,
            passportDate: collectionDetail.passportDate,
            passport: collectionDetail.passport_first + '-' + collectionDetail.passport_second + collectionDetail.passport,
            passportGiven: collectionDetail.passportGiven,
            address: collectionUserDetail.address,
            is_bussinessman: isBusinessman,
            isHurry: isHurry,
            // will_delivered: collection.will_delivered,
            // is_hurry:collection.is_hurry,
            // workName: collectionUserDetail.workName, 
            // salary: collectionUserDetail.salary,  
            phone: collectionUserDetail.phone,
            homePhone: collectionUserDetail.homePhone,
            preparedDate: collectionUserDetail.inviteDate,
            preparedTime: collectionUserDetail.inviteTime
            // experience:collectionUserDetail.experience,
            // workPosition:collectionUserDetail.workPosition

        }
        var data = {
            data: arr,
            path: '/org/offer-document'
        }
        await props.postActionThunk(data)
        await setCollection({})
        await setCollectionDetail({})
        await setCollectionUserDetail({})
        await setIsBusinessman(false)
        await setIsHurry(false)

        handleNext()

    }

    // debugger
    return (
        <div className={s.wrapper}>
            {props.isFetching ? <Loading /> : ''}
            <RoomContainer docToggle={setOpen} titles={titles} offeredData={props.offeredDocData} />
            <br />

            <Dialog onClose={activeStep !== steps.length ? handleClose : ''} fullWidth fullScreen={activeStep!==steps.length} aria-labelledby="customized-dialog-title" fullWidth maxWidth={'sm'} open={open} classes={{ paper: classesNext.dialogWrapper }} >
                <DialogTitle id="customized-dialog-title" style={partsStyle.dialog.header} onClose={activeStep !== steps.length ? () => {
                    handleClose()
                    handleReset()
                } : ''}>
                    {titles.headerTitle}
                </DialogTitle>

                <DialogContent dividers>
                    <div>
                        {/* <Container> */}
                        <div className={classesNext.root}>
                            {activeStep !== steps.length ?
                                <Stepper activeStep={activeStep} alternativeLabel={true} className={classesNext.stepperWrapper}>
                                    {steps.map((label) => (
                                        <Step key={label} connector={<ColorlibConnector className={classesNext.connector} />} >
                                            <StepLabel classes={{ label: classesNext.stepLabel, active: classesNext.activeStep }} StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper> :
                                <div style={{ textAlign: 'center', width: '100%' }}>
                                </div>
                            }
                            <div className={activeStep === 3? classesNext.success:''}>
                                {activeStep !== steps.length ?

                                    <div>
                                        <Typography className={classesNext.instructions} >
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {getStepContent(activeStep)}

                                            </form>
                                        </Typography>

                                        <div style={{ marginTop: '15px' }}>

                                            {/* {activeStep === steps.length - 1 ? <Button variant="contained" color="primary" type='submit' onClick={()=>{onSubmit(collection, collectionDetail)}}>Finish</Button> :
                                                ''} */}
                                        </div>
                                    </div>

                                    : (
                                        <Typography className={classesNext.instructions}>
                                            {props.contacts.length > 0 ?
                                                <OfferSuccess data={props.offeredDocData} contacts={props.contacts} getUserDataThunk={props.getUserDataThunk} handleReset={handleReset} setOpen={setOpen} /> :
                                                <OfferError handleReset={handleReset} setOpen={setOpen} />
                                            }
                                        </Typography>
                                    )}
                            </div>
                        </div>
                        {/* </Container> */}

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}




export default DocsPage



