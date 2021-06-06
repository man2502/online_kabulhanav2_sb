import { Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, Slider, Snackbar, TextField } from '@material-ui/core'
import { AddAlert, AddCircleOutline, Error, RemoveCircleOutline, WarningOutlined } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'
// import { TRUE } from 'node-sass'
import React, { useEffect,  useState } from 'react'
import { sbColors } from 'src/common/config'
import useForm from "./../../../common/form-validate/useForm"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        maxWidth:'1440px',
        marginLeft:'auto',
        marginRight:'auto',
        [theme.breakpoints.up('xs')]: {
            padding: '30px'
        }
    },
    content: {
        marginTop: '15px', marginBottom: '15px'
    },
    mainTitle: {
        textTransform: 'uppercase',
        padding: '20px 0',
        textAlign:'left',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.3rem'
        }
    },
    creditRange: {
        padding: '0 40px 0 0',
        [theme.breakpoints.down('xs')]: {
            padding: '0'
        },
        // border: '2px solid #ccc',

    },
    switcher: {
    },
    time: {
        padding: '20px',
        [theme.breakpoints.down('sm')]: {
            padding: '0'
        }
    },
    ////////
    creditDetail: {
        [theme.breakpoints.down('xs')]: {
            borderRight: '1px solid #ccc',
            padding: '20px',
            marginTop: '20px'
        },
        border: '1px solid #ccc',
        padding: '20px',
        backgroundColor: sbColors.calc.mini

    },
    answers: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #ccc',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',

        }
    },
    answerItems: {
        marginLeft: '15px',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'right',

        }
    },
    alertFont: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.1rem'
        }
    },
    alertIcon: {
        fontSize: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem'
        }
    }
}))

const Calc = (props) => {

    const classes = useStyles()
    const stateSchema = {
        time: { value: '12', error: '' },
        creditSum: { value: 0, error: '' },
        

    }
    const stateValidatorSchema = {

        creditSum: {
            required: true,
            // validator: {
            //     func: value => /[^0][0-9]+/g.test(value),
            //     error: 'Karz möçberini dogry giriziň'
            // }

        },
        time: {
            required: true
        }


    }
    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)

    const { creditSum, time } = values
    const { handleNext, setCollectionCalc, activeStep, handleBack, } = props


    const nextStep = async () => {

        setAlertOpen(false)

        await setCollectionCalc({ ...values, monthPay })
        // console.log(values)
        handleNext()

        // }
    }
    const [alertOpen, setAlertOpen] = useState(false)
    const handleAlertClose = () => {
        setAlertOpen(false)
    }
    const addCreditSum = () => {
        creditChange(null, creditSum + 100)
    }
    const removeCreditSum = () => {
        creditChange(null, creditSum - 100)
    }
    const creditChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            if (newValue <= props.docData.amount) {
                const value = {
                    target: { value: newValue, name: 'creditSum' }
                }
                handleOnChange(value)

            }

        }
    }
    const marks = [
        {
            value: 10000,
            label: '10 müň',
        },
        {
            value: 20000,
            label: '20 müň',
        },
        {
            value: 30000,
            label: '30 müň',
        },
        {
            value: 40000,
            label: '40 müň',
        },
        {
            value: 50000,
            label: '50 müň',
        },
        {
            value: 60000,
            label: '60 müň',
        },

    ];

    const hasHistory = props.data.time && props.data.creditSum
    const history_time = hasHistory ? props.data.time : ''
    const history_creditSum = hasHistory ? props.data.creditSum : ''
    useEffect(() => {
        if (hasHistory) {
            const valueCreditSum = {
                target: { value: history_creditSum, name: 'creditSum' }
            }
            handleOnChange(valueCreditSum)
            const valueTime = {
                target: { value: history_time, name: 'time' }
            }
            handleOnChange(valueTime)

        }

    }, [history_creditSum, history_time])
    // debugger

    var percentage = props.docData.percentage ? props.docData.percentage : 7


    var monthPay = ((Number(creditSum) + (Number(creditSum) * percentage / 100)) / Number(time.length > 0 ? time : '12')).toFixed(2)
    const needPeople = () => {
        if (Number(creditSum) > 16000) return 'Girew emlägi we üçünji tarapyň zamunlygy'
        else if (Number(creditSum) > 8000) return '2 raýatyň zamunlygy'
        else if (Number(creditSum) <= 8000) return '1 raýatyň zamunlygy'

    }

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.mainTitle}>Karz hasaplaýjy</h2>
            {/* <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert variant='filled' onClose={handleAlertClose} severity="error" classes={{ icon: classes.alertIcon }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className={classes.alertFont}>
                        Siziň aýlyk möçberiňiz, bu karz möçberini almaga rugsat bermeýär
                            </div>

                </Alert>
            </Snackbar> */}
            <div className={classes.content}>
                <Grid container spacing={2} >
                    <Grid lg={6} md={6} sm={6} xs={12}>
                        <div className={classes.creditRange}>
                            <div className={classes.switcher}>
                                <div style={{ backgroundColor: sbColors.calc.mini, padding: '10px' }}>
                                    <div className={'h5'} style={{ color: '#999', display: 'flex', justifyContent: 'space-between' }}>
                                        <span>Karz möçberi</span>
                                        <span>Ýokary çäk</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                        <span><input style={{
                                            backgroundColor: 'transparent',
                                            border: 'none', outline: 'none',

                                        }} value={creditSum} onChange={(e) => { creditChange('', Number(e.target.value)) }} inputProps={{

                                            min: 0,
                                            max: props.docData.amount,
                                            type: 'number',

                                        }} /></span>
                                        <span>{props.docData.amount} TMT</span>
                                    </div>
                                </div>
                                <Slider max={props.docData.amount ? props.docData.amount : 60000} step={props.docData.amount / props.docData.amount} defaultValue={hasHistory ? history_creditSum : 1000} name='creditSum' aria-labelledby="discrete-slider-custom" fullWidth value={creditSum} onChange={creditChange} />
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Karzyň möhleti</FormLabel>
                                    <RadioGroup aria-label="creditTime" name="time" value={time} defaultValue={'12'} onChange={handleOnChange} row>
                                        <FormControlLabel value="12" control={<Radio className={classes.time} checked={time.length <= 0 || time == '12'} classes={{ root: classes.time }} checkedIcon={<Button variant='contained' color='primary'>1 ýyllyk</Button>} icon={<Button variant='outlined' color='primary' >1 ýyllyk</Button>} color={'primary'} />} />
                                        { }
                                        <FormControlLabel value="24" control={<Radio className={classes.time} disabled={props.docData.time < 24} classes={{ root: classes.time }} checkedIcon={<Button variant='contained' color='primary'>2 ýyllyk</Button>} icon={<Button variant='outlined' color='primary'>2 ýyllyk</Button>} color={'primary'} />} />
                                        <FormControlLabel value="36" control={<Radio className={classes.time} disabled={props.docData.time < 36} classes={{ root: classes.time }} checkedIcon={<Button variant='contained' color='primary'>3 ýyllyk</Button>} icon={<Button variant='outlined' color='primary'>3 ýyllyk</Button>} color={'primary'} />} />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <br />
                            <div style={{ fontSize: '1rem', border:'1px solid orange',borderRadius:'8px', padding:'10px' }}><Error style={{color:'orange'}}/> Aljak pul möçberine görä ýüz tutujy her aý näçe töleg çykjagyny anyklama mümkinçilik berýär.</div>
                        </div>
                    </Grid>
                    <Grid lg={6} md={6} sm={6} xs={12}>
                        <div className={classes.creditDetail}>
                            <Grid container spacing={2}>
                                <Grid item lg={8} md={8} sm={12} xs={12}>
                                    <div className={'h4'} style={{ color: '#999' }}>Aýdaky töleg</div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'

                                    }}
                                    ><RemoveCircleOutline onClick={removeCreditSum} style={{ fontSize: '2.5rem', marginRight: '15px', cursor: 'pointer', color: sbColors.main.primary }} />
                                        <h1 className={classes.mainTitle + 'h1'} style={{ fontWeight: 'normal' ,marginTop:'0',paddingTop:'10px'}}>{typeof (monthPay) == 'number' || 'string' ? monthPay : '0'} TMT</h1>
                                        <AddCircleOutline onClick={addCreditSum} style={{ fontSize: '2.5rem', marginLeft: '15px', cursor: 'pointer', color: sbColors.main.primary }} />
                                    </div>
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <div className={'h4'} style={{ color: '#999' }}>Göterim</div>
                                    <span className={'h1'}>{percentage}%</span>
                                </Grid>

                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <div className={'h4'} style={{ color: '#999' }}>Karz almak üçin bolmaly aýlyk zähmet haky</div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center'

                                    }}
                                    >
                                        <h1 className={classes.mainTitle + 'h1'} style={{ fontWeight: 'normal' ,marginTop:'0',paddingTop:'10px'}}>{typeof (monthPay) == 'number' || 'string' ? Number(monthPay)*2 : '0'} TMT</h1>
                                       
                                    </div>
                                </Grid>
                               

                            </Grid>
                            <br />
                            <div className={classes.mainTitle} style={{ textTransform: 'uppercase' }}>Karzyň üpjünçiligi: <strong style={{borderBottom:'2px solid #000',}}>{needPeople()}</strong></div>
                        </div>
                    </Grid>

                </Grid>
            </div>
            <br />
            <br />
            <div style={{textAlign:'center'}}>
            <Button style={{ marginRight: '15px' }} variant="contained" disabled={activeStep === 0} onClick={handleBack} className={props.backButton} onClick={handleBack}>Yza</Button>
            {/* <Button variant="contained" color="primary" onClick={nextStep}>Indiki</Button> */}
            {
                !creditSum < 1 ?
                    // !time.length<1?
                    <Button variant="contained" color="primary" onClick={nextStep}>Indiki</Button> : <Button variant="contained" color="primary" disabled>Indiki</Button>}

            </div>
        </div>
    )
}


export default Calc