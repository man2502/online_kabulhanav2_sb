import React, { useState } from "react"
import { OutlinedInput, Button,  FormControl, Grid, InputLabel, makeStyles, Paper } from "@material-ui/core"
import { Controller, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import Passwords from "../admin/login/register/Passwords/Passwords"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { CheckCircle, Error, Lock } from '@material-ui/icons'
import { Loading } from './../../App'
import { sbColors } from "src/common/config"


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    displayNone:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        },
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const ChangePassword = (props) => {
    const classes = useStyles()
    const { handleSubmit, errors, control, setError, watch, reset } = useForm()
    const { t, i18n } = useTranslation();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // props.clearReset();
        reset()
    };
    const [passErr, setPassErr] = useState(false)

    const watchPass = watch('password')
    const watchPass1 = watch('password_repeat')
    const handleChange = (e) => {
        if (watchPass1 && watchPass !== watchPass1) setPassErr(true)
        else setPassErr(false)
    }
    const onSubmit = async (data) => {
        await props.change(data)
        handleClickOpen()
    }
    const oldPasswordText = 'Öňki gizlin açar'
    // console.log(errors)
    return (
        <div>
            {props.isFetching && <Loading />}
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{""}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.resetSuccess ? <div style={{
                            textAlign: 'center'
                        }}>
                            <CheckCircle style={{ color: '00dd00', fontSize: '10rem' }} />
                            {props.resetMessage.length > 1 && <h2 style={{ color: '#00dd00' }}>{props.resetMessage}</h2>}
                            <Button onClick={() => {
                                handleClose()
                            }} variant='contained' style={{ backgroundColor: '#00dd00', color: '#fff', marginTop: '20px', }}>OK</Button>
                        </div> : <div style={{
                            textAlign: 'center'
                        }}>
                                <Error style={{ color: 'ff0000', fontSize: '10rem' }} />
                                {props.resetMessage.length > 1 && <h2 style={{ color: '#dd0000' }}>{props.resetMessage}</h2>}
                                {/* <br/> */}
                                <Button onClick={handleClose} variant='contained' style={{ backgroundColor: '#dd0000', color: '#fff', marginTop: '20px', }}>OK</Button>
                            </div>}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>


                </DialogActions>
            </Dialog>
            <div className='h1'>Açary üýtgetmek</div>
            <Paper elevation={10} className={classes.root}>
                <Grid container justify={'space-between'}>
                    <br />
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl className={classes.margin + "" + classes.textField} variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-passwordold" error={errors.old_password}>{oldPasswordText}</InputLabel>
                                <Controller
                                    control={control}
                                    rules={{
                                        required: { value: true, message: 'Bu hökmany' },
                                        minLength: { value: 8, message: 'Azyndan 8 simwol' }
                                    }}
                                    name="old_password"
                                    defaultValue=''
                                    as={
                                        <OutlinedInput
                                            id="outlined-adornment-passwordold"
                                            type='password'
                                            labelWidth={oldPasswordText.length * 6.2}
                                            error={errors.old_password ? true : false}

                                        />
                                    }
                                />
                                {errors.old_password && <span className='errors'>{errors.old_password.message}</span>}
                                <br />
                                <Passwords control={control} errors={errors} watchPass={watchPass} watchPass1={watchPass1} classes={classes} handleChange={handleChange} />
                                <Button type="submit" variant='contained' color='primary' style={{ width: '100%', marginTop: '25px' }}>Üýtgetmek</Button>

                            </FormControl>
                        </form>
                    </Grid>
                    <Grid className={classes.displayNone} item lg={6} md={6} sm={4}>
                            <Lock style={{fontSize:'15rem', color: sbColors.main.primary }}/>
                    </Grid>

                </Grid>

            </Paper>

        </div>
    )
}


export default ChangePassword