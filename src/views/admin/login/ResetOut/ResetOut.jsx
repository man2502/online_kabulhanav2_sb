import { Button, Container, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Email from 'src/views/Infopage/Email/Email'
import Header from '../../header/Header'
import Passwords from '../register/Passwords/Passwords'
import { Loading } from './../../../../App'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { CheckCircle, Error } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'


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
    mainForm: {
        maxWidth: '600px',
        padding: '4% 5% 5% 5%',
        marginLeft: "auto",
        marginRight: 'auto',
        boxShadow: '0 12px 48px 0 rgb(14 40 135 / 12%)',
        backgroundColor: '#fff',
        borderRadius: '8px'

    }
}))
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ResetOut = (props) => {
    const { control, errors, handleSubmit, watch, setError } = useForm()
    const [passErr, setPassErr] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles()
    const watchPass = watch('password')
    const watchPass1 = watch('password_repeat')
    const handleChange = (e) => {
        if (watchPass1 && watchPass !== watchPass1) setPassErr(true)
        else setPassErr(false)
    }
    const history = useHistory()
    const onSubmit = async(data) => {
        var newData = data
        newData.token = props.location.pathname.substring('/online/password/reset/'.length)
        await props.reset(newData)
        handleClickOpen()
    }


    return (
        <div>
            {props.isFetching ? <Loading /> : ''}
            <Header />
            <Container>
                <div>
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
                               {props.resetSuccess?<div style={{
                                   textAlign:'center'
                               }}>
                                <CheckCircle style={{ color: '00dd00', fontSize: '10rem' }} />
                                {props.resetMessage.length>1&&<h2 style={{color:'#00dd00'}}>{props.resetMessage}</h2>}
                                <Button onClick={()=>{
                                    history.push('/online/login')
                                }} variant='contained' style={{ backgroundColor: '#00dd00', color: '#fff', marginTop: '20px', }}>OK</Button>
                               </div>:<div style={{
                                    textAlign:'center'
                               }}>
                                <Error style={{ color: 'ff0000', fontSize: '10rem' }} />
                                {props.resetMessage.length>1&&<h2 style={{color:'#dd0000'}}>{props.resetMessage}</h2>}
                                {/* <br/> */}
                               <Button onClick={handleClose} variant='contained' style={{ backgroundColor: '#dd0000', color: '#fff', marginTop: '20px', }}>OK</Button>
                                </div>}
                             </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            
                            {/* <Button onClick={()=>{
                                if (props.resetSuccess){
                                    history.push('/online/login')
                                }
                                else{
                                    handleClose()
                                }
                            }} color="primary">
                               Ýapmak
                         </Button> */}
                        </DialogActions>
                    </Dialog>
                </div>
                <div className={classes.mainForm}>
                    <h2>Açary dikeltmek</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{ marginLeft: '-8px', paddingRight: '8px' }}>

                            <Email control={control} setError={setError} errors={errors} />
                        </div>
                        <br />
                        <Passwords control={control} errors={errors} watchPass={watchPass} watchPass1={watchPass1} classes={classes} handleChange={handleChange} />
                        <br />
                        <Button type="submit" variant='contained' className='h2' color='primary' style={{ width: '100%' }}>Dikeltmek</Button>
                    </form>
                </div>

            </Container>
        </div>
    )
}



export default ResetOut