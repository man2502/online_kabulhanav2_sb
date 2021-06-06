import { Button, FormControl, Grid, InputLabel, makeStyles, Paper, Select, TextareaAutosize } from '@material-ui/core'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Loading } from 'src/App'
import actionMessages from 'src/common/actionMessages'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CheckCircle, Error } from '@material-ui/icons'
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: theme.spacing(3),
        padding: theme.spacing(3),
        width:'50%',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        },
        [theme.breakpoints.between('sm','md')]:{
            width:'100%',
        },
        [theme.breakpoints.between('md','lg')]:{
            width:'80%',
        }
    },
    textArea: {
        '&:hover': {
            // border:'1px solid #3f51b5',
            outline: '1px solid #000'
        },
        '&:focus, &:active': {
            border: '1px solid #3f51b5',
            outline: '1px solid #3f51b5'

        },
        border: '1px solid #ccc',
        width: '100%',
        borderRadius: '0px',
        padding: '18.5px 32px 18.5px 14px',
        lineHeight: '2',
        fontSize: '1rem'

    },
    displayNone: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FeedBack = (props) => {
    const classes = useStyles()
    const { control, errors, handleSubmit, reset } = useForm()
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async() => {
        // props.clearReset();
        await setOpen(false);
        reset()
    };
    const onSubmıt = async (data) => {
        await props.post(data)
        handleClickOpen()
    }
    
    return (
        <div>
            {props.isFetching && <Loading />}
            <header style={{ marginBottom: '15px' }}>
                <div className='h1'>Arz - Şikaýat bölümi</div>
            </header>
            <Paper elevation={11} className={classes.content}>
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
                            </div> : <div style={{ textAlign: 'center' }}>
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
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <form onSubmit={handleSubmit(onSubmıt)}>
                            <FormControl variant='outlined' fullWidth>
                                <InputLabel error={errors.type} htmlFor='outlined-feedBack-simple'>Arzyň görnüşi</InputLabel>
                                <Controller
                                    control={control}
                                    defaultValue=''
                                    name='type'
                                    rules={{
                                        required: { value: true, message: actionMessages().required }
                                    }}
                                    as={
                                        <Select
                                            error={errors.type}
                                            native
                                            defaultValue='none'
                                            label='Arzyň görnüşi'
                                            inputProps={{
                                                id: 'outlined-feedBack-simple',
                                            }}>
                                            <option value="" aria-label='none'></option>
                                            <option value="recommend">Teklip</option>
                                            <option value='complain'>Şikaýat</option>
                                        </Select>
                                    }
                                />
                            </FormControl>
                            {errors.type && <div className='errors'>{errors.type.message}</div>}
                            <br /><br />
                            <div>
                                <div style={{ marginBottom: '5px' }}><span style={{ color: '#ff0000' }}>* </span>{actionMessages().required}</div>
                                <Controller
                                    control={control}
                                    defaultValue=''
                                    name='content'
                                    rules={{
                                        required: { value: true, message: actionMessages().required }
                                    }}
                                    as={
                                        <TextareaAutosize rowsMin={10} rowsMax={20} error={errors.content} className={classes.textArea} placeholder='Siziň ýazgyňyz...' />
                                    }
                                />
                                {/* {errors.content&&<div className='errors'>{errors.content.message}</div>} */}

                            </div>
                            <br />
                            <Button variant='contained' type='submit' color='primary'>ugratmak</Button>
                        </form>
                    </Grid>
                    {/* <Grid className={classes.displayNone} item lg={6} md={6} sm={4}>
                        <SettingsBackupRestore style={{ fontSize: '15rem', color: '#3f51b5' }} />
                    </Grid> */}
                </Grid>
            </Paper>
        </div>
    )
}



export default FeedBack

