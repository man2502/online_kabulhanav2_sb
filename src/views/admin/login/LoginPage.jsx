import { Button, Container, FormControl,IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Snackbar, TextField } from "@material-ui/core"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
// import InfoSection from "./InfoSection/InfoSection"
import s from "./LoginPage.module.css"
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import Header from "../header/Header"
import { Loading } from "src/App"
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff';
import ResetPasswordContainer from "./ResetPassword/ResetPasswordContainer";
import actionMessages from "src/common/actionMessages";
import {Alert } from '@material-ui/lab';
import Footer from "../footer/Footer";
// import { Col, Row } from "react-bootstrap"
// import AutoAnswer from "./InfoSection/AutoAnswer/AutoAnswer"
// import axios from "axios"
// import { loginUserThunk } from "../../redux/mainPage-reducer"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
    mainTitle:{
        fontSize:'3.3rem',
       [theme.breakpoints.down('xs')]:{
           fontSize:'2rem'
       },
      
          
    },
    mainRefLogin: {
        display: 'inline-block',
        float: 'left',
        fontSize: '1.5rem',
        fontWeight:'700',
        fontFamily:'Montserrat',
        [theme.breakpoints.down('xs')]: {
            // display:'block',
            // textAlign:'center',
            // float:'none'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.1rem'
        }
    },
    mainRefReg: {
        color:theme.palette.primary.main,
        cursor:'pointer',
        display: 'inline-block',
        float: 'right',
        fontSize: '1.5rem',
        fontWeight:'700',
        fontFamily:'Montserrat',
        [theme.breakpoints.down('xs')]: {
            // display:'block',
            textAlign: 'center',
            // float:'none'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.1rem'
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
    },
    
}));


const LoginPage = (props) => {
    //dialog
    const [open, setOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] =React.useState(false)
    const handleAlertClose = () => {
        setAlertOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        props.clearReset()
        setOpen(false);
    };

    //
    const classes = useStyles();
    const [values, setValues] = React.useState({

        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const { control, handleSubmit, errors, watch } = useForm()

    const { t, i18n } = useTranslation();


    const onSubmit = data => props.login(data.login, data.password)
    // const onSubmit = data => console.log(data)
    const watchUserName = watch('login')
    // function Alert(props) {
    //     return <MuiAlert elevation={6} variant="filled" {...props} />;
    //   }

useEffect(()=>{
    if (props.error.length>5){
        setAlertOpen(true)
    }  else if (props.error.length<4){
        setAlertOpen(false)
    }
},[props.error])

    return (
        <div className={s.wrapper}>

            {props.isFetching ? <Loading /> : ''}
            <Header />
            {props.isConnected === false ? <div style={{ fontSize: '1.8rem', color: '#dd0000', textTransform: 'uppercase' }}>
                <SignalWifiOffIcon style={{ fontSize: '2rem' }} /> <span style={{ marginLeft: '10px' }}>Internet baglanyşygyňyzy barlaň</span>
            </div> : ''}
            <ResetPasswordContainer open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} />

                    <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{vertical:'bottom',horizontal:'center'}}>
                        <Alert variant='filled' onClose={handleAlertClose} severity="error"classes={{icon:classes.alertIcon}} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <div className={classes.alertFont}>

                                {props.error}
                            </div>

                        </Alert>
                    </Snackbar>
            <Container>
                <div className={s.mainTitle}>
                    {/* {props.error.length>0&&<div style={{
                        backgroundColor:'#FF5FA4',
                        marginBottom:'10px',
                        color: '#9A001B',
                        padding: '10px'
                    }}>{props.error}</div>} */}

                   



                    <h1 className={classes.mainTitle}>{t('Online reception')}</h1>
                    {/* <p>{t('Use banking services online')}</p> */}
                </div>
                <div className={s.mainFormWrapper}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={classes.mainRefLogin}>{t('Sign in')}</h2>  <NavLink to='/register'><h2 className={classes.mainRefReg}>{t('toSignUp')}</h2></NavLink>
                        <Controller
                            control={control}
                            name="login"
                            rules={{
                                required: { value: true, message: actionMessages().required },
                                // minLength: { value: 6, message: actionMessages().minLength(6) },

                            }}
                            defaultValue=''
                            as={
                                <TextField id="outlined-basic" label={t('Username')} variant="outlined" error={errors.login} fullWidth />
                            }
                        />
                        {errors.login && <div className='errors' style={{textAlign:'left'}}>{errors.login.message}</div>}
                        <br />
                        <br />
                        <FormControl className={classes.margin + "" + classes.textField} variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password" error={errors.password}>{t('Password')}</InputLabel>
                            <Controller
                                control={control}
                                rules={{
                                    required: { value: true, message: actionMessages().required },
                                    // minLength: { value: 8, message: actionMessages().minLength(8) }
                                }}
                                name="password"
                                defaultValue=''
                                as={

                                    <OutlinedInput
                                        error={errors.password}
                                        // id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label={t('Password')}

                                    />
                                } />
                            {errors.password && <div className='errors' style={{textAlign:'left'}}>{errors.password.message}</div>}

                        </FormControl>
                        <br />
                        <br />
                        <br />
                        {/* <TextField type="submit" fullWidth value="Girmek"/> */}
                        {/* <button type="submit" className={s.submit}>{t('Login')}</button> */}
                        <Button type="submit" variant='contained' className='h2' color='primary' style={{ width: '100%' , color:"#fff"}}>{t('Login')}</Button>
                        <br />
                        <br />
                        <div className={s.help}>
                            <span className={s.reset} onClick={() => { setOpen(true) }} style={{ fontSize: '18px', color:'green'}}>{t('Forgot password')}</span>

                            {/* <NavLink to="/reception">
                                <span className={s.guestMode}>
                                    <PermIdentityIcon /> Şahsy tarap
                                </span>
                            </NavLink> */}

                        </div>
                    </form>

                </div>

            </Container>

            <div className={s.infoSection}>

               <Footer />
            </div>
        </div>
    )
}


export default LoginPage