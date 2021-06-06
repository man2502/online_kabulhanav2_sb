import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, Snackbar } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import actionMessages from 'src/common/actionMessages';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    paper: {
        zIndex: '9999999999999999',
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    alertFont: {
        fontSize:'1.5rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'1.1rem'
        }
    },
    alertIcon:{
        fontSize:'3rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'2.5rem'
        }
    }
}))

export default function ResetPassword(props) {
    const classes = useStyles()

    const { control, handleSubmit, errors, watch } = useForm()

    const onSubmit = (data) => {

        props.resetEmailThunk(data)

    }
    const watchEmail = watch('reset_email')
    const close = () => {
        if (!props.resetEmailSuccess) {
            handleAlertClose()
            handleSuccessClose()
            props.handleClose()
        }
        else {

        }
    }
    const [alertOpen, setAlertOpen] =React.useState(false)
    const handleAlertClose = () => {
        setAlertOpen(false);
    };
    const [successOpen, setSuccessOpen] =React.useState(false)
    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };

    useEffect(()=>{
        if(props.resetEmailErrorMessage.length > 1){
            setAlertOpen(true)
        }
        
    },[props.resetEmailErrorMessage])
    useEffect(()=>{
        if(props.resetEmailSuccess){
            setSuccessOpen(true)
        }
      
    },[props.resetEmailSuccess])
    
    return (
        <div>
            <Dialog classes={{ paper: classes.paper }} open={props.open} onClose={close} aria-labelledby="form-dialog-title1">
                <DialogTitle id="form-dialog-title1">
                    {/* <strong> */}
                    <span style={{ textTransform: 'uppercase' }}>
                        Açary dikeltmek
                    </span>
                    {/* </strong> */}
                    {/* {props.isFetching&&<span> <CircularProgress /></span>} */}
                </DialogTitle>
                <DialogContent>
                    
                    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert variant='filled' onClose={handleAlertClose} severity="error" classes={{ icon: classes.alertIcon }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className={classes.alertFont}>
                                {props.resetEmailErrorMessage}
                            </div>

                        </Alert>
                    </Snackbar>
                    <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                        <Alert variant='filled' onClose={handleSuccessClose} severity="success" classes={{ icon: classes.alertIcon }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className={classes.alertFont}>

                            Açary çalyşmak üçin ssylka email-e ugradyldy
                                     </div>

                        </Alert>
                    </Snackbar>
                    <DialogContentText>
                       
                    </DialogContentText>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                control={control}
                                name="reset_email"
                                rules={{
                                    required: { value: true, message: actionMessages().required },
                                    pattern: {
                                        value: actionMessages().emailValidation,
                                        message: actionMessages().email
                                    }

                                }}
                                defaultValue=''
                                as={
                                    <TextField label={'Email'} variant="outlined" fullWidth error={errors.reset_email} />
                                }
                            />
                            {errors.reset_email && <span className='errors'>{errors.reset_email.message}</span>}


                            <DialogActions>
                                <Button disabled={props.isFetching} onClick={props.handleClose} color="primary">
                                    Ýapmak
                                </Button>
                                <Button disabled={props.isFetching || props.resetEmailSuccess} type='submit' variant='contained' color="primary">
                                    Dikeltmek
                                </Button>
                            </DialogActions>
                        </form>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    );
}
