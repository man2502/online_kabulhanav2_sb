import React, { useEffect, useState } from "react"
import Header from "../../header/Header"
import s from "./Register.module.css"
import { Button, Container, makeStyles, Snackbar, TextField } from "@material-ui/core"
import { Controller, useForm } from "react-hook-form"
// import InfoSection from "./../InfoSection/InfoSection"
import { useTranslation } from 'react-i18next';
// import { ErrorMessage } from "@hookform/error-message"
import { NavLink, Redirect } from "react-router-dom"
import UserName from "src/views/Infopage/UserName/UserName"
import UserSurname from "src/views/Infopage/UserSurname/UserSurname"
import UserPhone from "src/views/Infopage/UserPhone/UserPhone"
import Email from "src/views/Infopage/Email/Email"
import { Loading } from "src/App"
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff';
import Passwords from "./Passwords/Passwords"
import actionMessages from "src/common/actionMessages"
import {Alert,  AlertTitle } from '@material-ui/lab';
import Footer from "../../footer/Footer"


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    mainTitle:{
        fontSize:'3.3rem',
       [theme.breakpoints.down('xs')]:{
           fontSize:'2rem'
       },
      
          
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
    mainRefLogin: {
        display: 'inline-block',
        float: 'left',
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
        color: theme.palette.primary.main,
        display: 'inline-block',
        fontWeight:'700',
        float: 'right',
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
    errors:{
        display:'block',
        textAlign:'left'
    }
}));
const Register = (props) => {
    const { control, handleSubmit, watch, errors, setError } = useForm()
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const onSubmit = data => {
        // const newData = {username: data.login, password: data.password, c_password: data.password,name:data.user_name, surname: data.user_surname, phone: data.user_phone, email:data.email }
        props.registerUserThunk(data)
        // console.log(newData)
    }
    const [alertOpen, setAlertOpen] =React.useState(false)
    const handleAlertClose = () => {
        setAlertOpen(false);
    };
    const [successOpen, setSuccessOpen] =React.useState(false)
    const handleSuccessClose = () => {
        setSuccessOpen(false);
    };
    // const onSubmit = data => console.log({name: data.login, password: data.password, c_password: data.password, surname: data.user_surname, phone: data.user_phone })
    const watchPass = watch('password')
    const watchPass1 = watch('password_repeat')
    const watchUserName = watch('username')
    const [passErr, setPassErr] = useState(false)
    const handleChange = (e) => {
        if (watchPass1 && watchPass !== watchPass1) setPassErr(true)
        else setPassErr(false)
    }
    useEffect(() => {
        if (watchUserName) {
            errors.username = ''
        }


    }, [watchUserName])
    useEffect(()=>{
        if (props.error.length>4){
            setAlertOpen(true)
        }
        else if (props.error.length<4){
            setAlertOpen(false)
        }
    },[props.error])
    useEffect(()=>{
        if (!!props.isRegistered){
            setSuccessOpen(true)
        }
    },[props.isRegistered])
    
    
    return (
        <div className={s.wrapper}>
            {props.isFetching ? <Loading /> : ''}
            <Header />
            {props.isConnected === false ? <div style={{ fontSize: '1.8rem', color: '#dd0000', textTransform: 'uppercase' }}>
                <SignalWifiOffIcon style={{ fontSize: '2rem' }} /> <span style={{ marginLeft: '10px' }}>Internet baglanyşygyňyzy barlaň</span>
            </div> : ''}
            <div>
                <Container>
                    <div className={s.mainTitle}>
                        <h1 className={classes.mainTitle}>{t('Online reception')}</h1>
                        {/* <p>{t('Use banking services online')}</p> */}
                    </div>
                    {props.isPerson == null ? <Redirect to='/select' /> : ''}
                    {!props.isPerson ? <div>
                        <h2>Bagyşlaň Edara taraplar bankda şu hyzmaty birikdirip bilerler</h2>
                        <div style={{ textAlign: 'center' }}><NavLink to='/select'><h2>Yza</h2></NavLink></div>
                    </div> : <div className={s.mainFormWrapper}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className={classes.mainRefLogin}>{t('toSignUp')}</h2>  <NavLink to='/login'><h2 className={classes.mainRefReg}>{t('Sign in')}</h2></NavLink>
                                <Controller
                                    control={control}
                                    name="username"
                                    rules={{
                                        required: { value: true, message: actionMessages().required },
                                        minLength: { value: 6, message: actionMessages().minLength(6) }

                                    }}
                                    defaultValue=''
                                    as={
                                        <TextField id="outlined-basic" label={t('Username')} variant="outlined" fullWidth error={errors.username} />
                                    }
                                />
                                {errors.username && <span className={'errors' + ' ' +classes.errors}>{errors.username.message}</span>}

                                {/* <ErrorMessage errors={errors} name="login" message={<span style={{ color: 'red' }}>{errors.login||'Bu hokmany'}</span>} /> */}
                                {/* {errors.login?.type ==='required' && <span style={{color:'#ff2222'}}>bu hokmany</span>} */}
                                <br />
                                <br />
                                <Passwords control={control} errors={errors} watchPass={watchPass} watchPass1={watchPass1} classes={classes} handleChange={handleChange} />
                                <br/>
                                <h2 className={classes.mainRefLogin}>{t('personalData')}</h2>
                                <div style={{ marginLeft: "-8px" }}>
                                    <UserName control={control} setError={setError} errors={errors} />
                                    <br />

                                    <UserSurname control={control} setError={setError} errors={errors} />
                                    <br />

                                    <UserPhone control={control} setError={setError} errors={errors} />
                                    <br />
                                    <Email control={control} setError={setError} errors={errors} />
                                </div>


                                <br /><br />
                                <Button type='submit' variant='contained' color='primary' style={{ width: '100%' ,color:'#fff'}}>{t('signUp')}</Button>


                            </form>
                            <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                <Alert variant='filled' onClose={handleAlertClose} severity="error" classes={{ icon: classes.alertIcon }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className={classes.alertFont}>
                                        {props.error}
                                    </div>

                                </Alert>
                            </Snackbar>
                            <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                <Alert variant='filled' onClose={handleSuccessClose} severity="success" classes={{ icon: classes.alertIcon }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className={classes.alertFont}>

                                        {props.username} Siz üstünlikli registrasiýa bolduňyz
                                     </div>

                                </Alert>
                            </Snackbar>

                        </div>}
                </Container>
                <div className={s.infoSection}>
                   <Footer />
                </div>
            </div>
        </div>

    )
}


export default Register
