import { Button, FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import actionMessages from "src/common/actionMessages"
import checkAge from "src/common/form-validate/checkAge"
import useForm from "src/common/form-validate/useForm"
import Passport from "src/views/Infopage/Passport/Passport"

import {
    
    KeyboardDatePicker,
    
} from '@material-ui/pickers';

const useStyles = makeStyles((theme)=>({
    wrapper:{
        maxWidth:'1440px',
        marginLeft:'auto',
         marginRight:'auto'
,        [theme.breakpoints.up('sm')]:{
            padding:'30px'
        }
    }
}))

const PostUserData = (props) => {
    const [date_errors_first, set_date_errors_first] = useState('')
    const [date_errors_birth, set_date_errors_birth] = useState('')

    const classes = useStyles()
    const stateSchema = {
        name: { value: '', error: '' },
        surname: { value: '', error: '' },
        thirdName: { value: '', error: '' },
        birthDay: { value: new Date(), error: '' },
        passport: { value: '', error: '' },
        passport_first: { value: '', error: '' },
        passport_second: { value: '', error: '' },
        passportDate: { value: new Date(), error: '' },
        passportGiven: { value: '', error: '' },
        gender: { value: '', error: '' },
        nationality:{value:'', error:''}

    }


    const stateValidatorSchema = {
        name: {
            required: true,
            validator: {
                func: value => /^([A-Za-z-ÝýäÄŽžÇçÜüŇňÖö])+([A-Za-z-ýäžçüňÖö]+)*/.test(value),
                error: 'At 2 harpdan kän bolmaly'
            }
        },
        surname: {
            required: true,
            validator: {
                func: value => /^([A-Za-z-ÝýäÄŽžÇçÜüŇňÖö])+([A-Za-z--ÝýäÄŽžÇçÜüŇňÖö])+([A-Za-z--ÝýäÄŽžÇçÜüŇňÖö]+)*/.test(value),
                error: 'Familiýa 3 harpdan kän bolmaly'
            }
        },
        thirdName: {
            // required: true,
            // validator: {
            //     func: value => /^([A-Za-z -ÝýäÄŽžÇçÜüŇňÖö])+([A-Za-z--ÝýäÄŽžÇçÜüŇňÖö])+([A-Za-z--ÝýäÄŽžÇçÜüŇňÖö]+)*/.test(value),
            //     error: 'Atasynyň ady 3 harpdan kän bolmaly'
            // }
        },

        birthDay: {
            required: true,
        },
        passport: {
            required: true,
            validator: {
                func: value => /[0-9]{6}/g.test(value),
                error: actionMessages().minLength(6)
            }
        },
        passport_first: {
            required: true,
        },
        passport_second: {
            required: true
        },
        passportDate: {
            required: true
        },
        passportGiven: {
            required: true
        },
        gender: {
            required: true
        },
        nationality:{
            required:true
        }
    }
    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)

    const { name, surname, thirdName, birthDay, passport, passport_first, passport_second, passportDate, passportGiven, gender ,nationality} = values
    const { handleNext, register, setCollection, activeStep, handleBack, data } = props


    const setData = async () => {
        await setCollection({ ...values })
        // console.log(values)
        handleNext()
    }
    var checkedAge = checkAge(birthDay)
    // console.log(values)
    const hasHistory = !!data.name && !!data.surname && !!data.birthDay && !!data.passport && !!data.passport_first && !!data.passport_second && !!data.passportDate && !!data.passportGiven
    const history_name = hasHistory ? data.name : ''
    const history_surname = hasHistory ? data.surname : ''
    const history_thirdName = hasHistory ? data.thirdName : ''
    const history_birthDay = hasHistory ? data.birthDay : ''
    const history_passport_first = hasHistory ? data.passport_first : ''
    const history_passport_second = hasHistory ? data.passport_second : ''
    const history_passport = hasHistory ? data.passport : ''
    const history_passportGiven = hasHistory ? data.passportGiven : ''
    const history_passportDate = hasHistory ? data.passportDate : ''
    const history_gender = hasHistory ? data.gender : ''
    const history_nationality = hasHistory ? data.nationality : ''

    useEffect(() => {
        if (hasHistory) {
            const valueName = {
                target: { value: history_name, name: 'name' }
            }
            handleOnChange(valueName)
            const valueSurname = {
                target: { value: history_surname, name: 'surname' }
            }
            handleOnChange(valueSurname)
            const valueThirdName = {
                target: { value: history_thirdName, name: 'thirdName' }
            }
            handleOnChange(valueThirdName)
            const valuePassportGiven = {
                target: { value: history_passportGiven, name: 'passportGiven' }
            }
            handleOnChange(valuePassportGiven)
            const valuePassportDate = {
                target: { value: history_passportDate, name: 'passportDate' }
            }
            handleOnChange(valuePassportDate)
            const valueBirthDay = {
                target: { value: history_birthDay, name: 'birthDay' }
            }
            handleOnChange(valueBirthDay)
            const valuePassportFirst = {
                target: { value: history_passport_first, name: 'passport_first' }
            }

            handleOnChange(valuePassportFirst)
            const valuePassportSecond = {
                target: { value: history_passport_second, name: 'passport_second' }
            }
            handleOnChange(valuePassportSecond)
            const valuePassport = {
                target: { value: history_passport, name: 'passport' }
            }
            handleOnChange(valuePassport)
            const valueGender = {
                target: { value: history_gender, name: 'gender' }
            }
            handleOnChange(valueGender)


        }

    }, [history_name, history_surname, history_gender, history_thirdName, history_birthDay, history_passport, history_passport_first, history_passport_second, history_passportGiven, history_passportDate])
    // console.log(values)
    // console.log(values)
    const [other_nation,set_other_nation] = useState('başga')
    // console.log(other_nation.current)
    return (
        <div className={classes.wrapper}>
            <Grid container spacing={2}> 
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField name='name' variant="outlined" label="Ady"  fullWidth value={name} onChange={handleOnChange} error={errors.name && dirty.name} />
            {errors.name && dirty.name && <span className='errors'>{errors.name}</span>}

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField name='surname' variant="outlined" label="Familiýasy" fullWidth value={surname} onChange={handleOnChange} error={errors.surname && dirty.surname} />
            {errors.surname && dirty.surname && <span className='errors'>{errors.surname}</span>}

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField name='thirdName' variant="outlined" label="Atasynyň ady" fullWidth value={thirdName} onChange={handleOnChange} error={errors.thirdName && dirty.thirdName} />
            {errors.thirdName && dirty.thirdName && <span className='errors'>{errors.thirdName}</span>}

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <KeyboardDatePicker
                format="dd-MM-yyyy"
                okLabel='Saýla'
                margin='none'
                cancelLabel='Yza'
                id="date-picker-passport_date"
                label="Doglan senesi"
                name='birthDay'
                inputVariant='outlined'
                invalidDateMessage={actionMessages().correctDate}
                fullWidth
                views={["date", "month", "year"]}
                defaultValue={hasHistory ? history_passportDate : new Date()}
                value={birthDay}
                error={(errors.birthDay && dirty.birthDay) || (date_errors_birth.length > 2 && dirty.birthDay) || (!checkedAge && dirty.birthDay)}
                invalidLabel={actionMessages().correctDate}
                maxDate={new Date()}
                minDateMessage={actionMessages().correctDate}
                maxDateMessage={actionMessages().correctDate}
                onError={(e) => { set_date_errors_birth(e) }}
                onChange={(e) => {
                    handleOnChange({
                        target: {
                            value: (e), name: 'birthDay'
                        }
                    })
                }}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />

            {!checkedAge && dirty.birthDay && date_errors_birth.length < 2 && <span className='errors'>20-60 ýaş aralyk</span>}
            {errors.birthDay && dirty.birthDay && <div className='errors'>{errors.birthDay}</div>}

                </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <Passport data={[history_passport_first, history_passport_second, history_passport]} passportSeries={props.passportSeries} register={register} test={handleOnChange} errors={errors} dirty={dirty} />
            {errors.passport && dirty.passport && <span className='errors' style={{ marginLeft: '40%' }}>{errors.passport}</span>}

            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
            <KeyboardDatePicker
                format="dd-MM-yyyy"
                okLabel='Saýla'
                margin='none'
                cancelLabel='Yza'
                id="date-picker-passport_date"
                label="Passportyň berlen senesi"
                name='passportDate'
                inputVariant='outlined'
                invalidDateMessage={actionMessages().correctDate}
                fullWidth
                views={["date", "month", "year"]}
                defaultValue={hasHistory ? history_passportDate : new Date()}
                value={passportDate}
                error={(errors.passportDate && dirty.passportDate) || (date_errors_first.length > 2 && dirty.passportDate)}
                invalidLabel={actionMessages().correctDate}
                maxDate={new Date()}
                minDateMessage={actionMessages().correctDate}
                maxDateMessage={actionMessages().correctDate}
                onError={(e) => { set_date_errors_first(e) }}
                onChange={(e) => {
                    handleOnChange({
                        target: {
                            value: (e), name: 'passportDate'
                        }
                    })
                }}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <br />
            {errors.passportDate && dirty.passportDate && <div className='errors'>
            {errors.passportDate}</div>}
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>

            <TextField name='passportGiven' variant="outlined" label="Passportyň berlen ýeri" fullWidth value={passportGiven} onChange={handleOnChange} error={errors.passportGiven && dirty.passportGiven} />
            {errors.passportGiven && dirty.passportGiven && <span className='errors'>{errors.passportGiven}</span>}
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
            <FormControl component="fieldset" error={errors.gender&& dirty.gender}>
                <FormLabel component="legend">Jynsy</FormLabel>
                <RadioGroup aria-label="gender" name="gender" row   value={gender} onChange={handleOnChange}>
                    <FormControlLabel  value="male" control={<Radio   color='primary'/>} label="Erkek" />
                    <FormControlLabel  value="female" control={<Radio  color='primary' />} label="Zenan" />
                    {/* <FormControlLabel  value="other" control={<Radio   color='primary'/>} label="Başga" /> */}
                </RadioGroup>
            </FormControl><br/>
            <FormControl component="fieldset"  >
                <FormLabel component="legend">Milleti</FormLabel>
                <RadioGroup aria-label="gender" name="nationality" row   value={nationality} onChange={handleOnChange}>
                    <FormControlLabel  value="true" control={<Radio   color='primary'/>} label="Türkmen" />
                    <FormControlLabel  value={'other'} control={<Radio checked={ nationality  !=='true'&&nationality!==''}  color='primary'/>} label="Başga" />
                </RadioGroup>
            </FormControl>
                {nationality !== 'true'&&nationality!==''&&<TextField variant='outlined' value={other_nation} label='Milleti'  fullWidth onChange={(e)=>{
                    set_other_nation(e.target.value)
                    handleOnChange({
                        target:{
                            value:e.target.value,
                            name:'nationality'
                        }
                    })
                    // nationality !== 'true'&&nationality!==''
                }} error={errors.nationality &&dirty.nationality}/>}

            </Grid>
           

            </Grid>

           

            <br /><br />
            <div style={{textAlign:'center'}}>
            <Button style={{ marginRight: '15px' }} variant="contained" disabled={activeStep === 0} onClick={handleBack} className={props.backButton} onClick={handleBack}>Yza</Button>
            {!errors.name &&
                !errors.surname &&
                !errors.thirdName &&
                !errors.birthDay && checkedAge &&
                !errors.passportDate &&
                !errors.passport &&
                !errors.passport_first &&
                !errors.passportGiven &&
                date_errors_first < 2 &&
                date_errors_birth < 2 &&
                gender.length>0&&
                !errors.nationality&&
                !errors.passport_second ?
                <Button variant="contained" color="primary" onClick={setData}>Indiki</Button> : <Button variant="contained" color="primary" disabled>Indiki</Button>}

            </div>


        </div>
    )

}



export default PostUserData