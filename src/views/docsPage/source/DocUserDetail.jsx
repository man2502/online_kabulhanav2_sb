import { Button, Grid, makeStyles, TextField } from "@material-ui/core"
import React, { useEffect, useMemo, useState } from "react"
import NumberFormat from "react-number-format"
import useForm from "../../../common/form-validate/useForm"
import ConfirmInfo from "src/views/base/confirmInfo/ConfirmInfo";
import getCurrentDate from "src/common/getCurrentDate";
import { dateWorking } from "src/common/dateWorking";
import MeetDateContainer from "src/views/Infopage/MeetDate/MeetDateContainer";

const useStyles = makeStyles((theme) =>({
    wrapper:{
        maxWidth:'1440px',
    marginLeft:'auto',
     marginRight:'auto'
,        [theme.breakpoints.up('sm')]:{
        padding:'30px'
    }
    }
}))

const DocUserDetail = (props) => {
    const [date_errors_invite, set_date_errors_invite] = useState('')
    const classes = useStyles()
    const stateSchema = {
        address: { value: '', error: '' },
        // workName: { value: '', error: '' },
        // salary: { value: '', error: '' },
        phone: { value: '', error: '' },
        homePhone: { value: '', error: '' },
        // experience:{value:'',error:''},
        // workPosition:{value:'',error:''}
        inviteDate: { value: new Date(), error: '' },
        inviteTime: { value: '', error: '' }

    }
    const stateValidatorSchema = {
        address: {
            required: true,


        },
        // workName: {
        //     required: true,

        // },
        // workPosition:{
        //     required:true
        // },
        // salary: {
        //     required: true,
        //     validator: {
        //         func: value => /[^0][0-9]+/g.test(value),
        //         error: 'Aýlyk hakyny dogry giriziň'
        //     }

        // },
        phone: {
            required: true,
        },
        homePhone: {
            validator: {
                func: value => /^[0-9]{0,12}$/g.test(value),
                error: 'Nomeri dogry giriziň'
            }
        },
        inviteDate: {
            required: true
        },
        inviteTime: {
            required: true
        },
        // experience:{
        //     required:true,

        // }

    }
    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)

    const {
        address,
        // workName,
        phone,
        homePhone,
        // workPosition,
        // salary,
        // experience
        inviteDate,
        inviteTime,
    } = values
    const { handleNext, setCollection, activeStep, handleBack, data } = props

    const [open, setOpen] = React.useState(false);
    // props.setCollection(values)

    const setData = async () => {
        handleClickOpen()

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const agree = async () => {
        await setCollection({ ...values })
        await handleClose()
        // console.log(values)
        handleNext()
    }
    const CurrentDate = useMemo(() => {
        return getCurrentDate()
    }, [open])
    const cWidth = document.body.clientWidth > 411

    const hasHistory = !!data.address &&
        // !!data.workName && 
        // !!data.workPosition && 
        // !!data.salary && 
        // !!data.experience && 
        !!data.phone &&
        !!data.homePhone
    const history_address = hasHistory ? data.address : ''
    // const history_workName = hasHistory ? data.workName : ''
    // const history_workPosition = hasHistory ? data.workPosition : ''
    // const history_salary = hasHistory ? data.salary : ''
    // const history_experience = hasHistory ? data.experience : ''
    const history_phone = hasHistory ? data.phone : ''
    const history_homePhone = hasHistory ? data.homePhone : ''
    const history_inviteDate = hasHistory ? data.inviteDate : ''
    const history_inviteTime = hasHistory ? data.invitTime : ''

    useEffect(() => {
        if (hasHistory) {
            const valueAddress = {
                target: { value: history_address, name: 'address' }
            }
            handleOnChange(valueAddress)

            // const valueWorkName = {
            //     target: { value: history_workName, name: 'workName' }
            // }
            // handleOnChange(valueWorkName)

            // const valueWorkPosition = {
            //     target: { value: history_workPosition, name: 'workPosition' }
            // }
            // handleOnChange(valueWorkPosition)

            // const valueSalary = {
            //     target: { value: history_salary, name: 'salary' }
            // }
            // handleOnChange(valueSalary)

            // const valueExperience = {
            //     target: { value: history_experience, name: 'experience' }
            // }
            // handleOnChange(valueExperience)

            const valuePhone = {
                target: { value: history_phone, name: 'phone' }
            }
            handleOnChange(valuePhone)

            const valueHomePhone = {
                target: { value: history_homePhone, name: 'homePhone' }
            }
            handleOnChange(valueHomePhone)
            const valueInviteDate = {
                target: { value: history_inviteDate, name: 'inviteDate' }
            }
            handleOnChange(valueInviteDate)
            const valueInviteTime = {
                target: { value: history_inviteTime, name: 'inviteTime' }
            }
            handleOnChange(valueInviteTime)





        }

    }, [history_address,
        // history_workName, 
        // history_workPosition, 
        // history_salary, 
        // history_experience, 
        history_phone,
        history_inviteDate,
        history_inviteTime,
        history_homePhone])
    // console.log('render docUserdetail')


    const createConfirmInfo = {
        priceData: props.docData[Number(props.dataDoc.docModeInfo)],
        titles: {
            paymentName: 'Güwanama tölegi'
        },
        data: [
            { value: 'Ady:', name: props.dataF.name },
            { value: 'Familiýasy:', name: props.dataF.surname },
            { value: 'Atasynyň ady:', name: props.dataF.thirdName },
            { value: 'Doglan senesi: ', name: props.dataF.birthDay ? dateWorking().createDate(props.dataF.birthDay) : '' },
            { value: 'Passport:', name: props.dataF.passport_first + '-' + props.dataF.passport_second + props.dataF.passport },
            { value: 'Passportyň berlen senei: ', name: props.dataF.passportDate ? dateWorking().createDate(props.dataF.passportDate) : '' },
            { value: 'Passportyň berlen ýeri: ', name: props.dataF.passportGiven },
            { value: 'Ýaşaýan salgysy:', name: address },
            { value: 'Jynsy:', name: props.dataF.gender === 'male' ? 'Erkek' : 'Zenan' },
            { value: 'Milleti:', name: props.dataF.nationality === 'true' ? 'türkmen' : props.dataF.nationality },
            // { value: 'Iş ýeri:', name: workName },
            // { value: 'Wezipesi:', name: workPosition },
            // { value: 'Aýlygyň möçberi: ', name: salary },
            // { value: 'Iş tejribesi: ', name: experience },
            { value: 'Telefon:', name: phone },
            { value: 'Öý telefony: ', name: homePhone },
            // { value: 'Telekeçimi: ', name: props.isBusinessman ? 'Hawa' : 'Ýok' },
            // { value: 'Gyssaglymy: ', name: props.isHurry ? 'Hawa' : 'Ýok' },
            { value: 'Banka barmaly wagtyňyz: ', name: dateWorking().createDate((inviteDate !== 'Invalid Date' && inviteDate !== null) ? inviteDate : new Date()) + ' ' + (inviteTime) + ":00" },





        ]
    }
    const handleBackSave = async () => {
        await setCollection({ ...values })
        handleBack()

    }

    return (
        <div className={classes.wrapper}>
            <ConfirmInfo open={open} data={createConfirmInfo}services={{is_hurry:props.isHurry}} dataDoc={props.dataDoc} handleClose={handleClose} agree={agree} cWidth={cWidth} backButton={props.backButton} />

            <Grid container spacing={4}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <TextField name='address' variant="outlined" label="Ýaşaýan salgysy" fullWidth value={address} onChange={handleOnChange} error={errors.address && dirty.address} />
            {errors.address && dirty.address && <span className='errors'>{errors.address}</span>}

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <NumberFormat placeholder={'+993 (6 )'} error={errors.phone && dirty.phone} name='phone' value={phone} onChange={handleOnChange} customInput={TextField} variant={'outlined'} label="Telefon" fullWidth format="+993 (6#) ##-##-##" />

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <NumberFormat placeholder={''} name='homePhone' error={errors.homePhone && dirty.homePhone} fullWidth value={homePhone} onChange={handleOnChange} customInput={TextField} fullWidth variant={'outlined'} label="Öý-telefony" />

                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
            <MeetDateContainer docType={'document'} handleOnChange={handleOnChange} inviteDate={inviteDate} invitTime={inviteTime} dirty={dirty} date_errors_invite={date_errors_invite} set_date_errors_invite={set_date_errors_invite} hasHistory={hasHistory} history_inviteDate={history_inviteDate} />

                </Grid>
                
            </Grid>
           
            <br />
            <div style={{textAlign:'center'}}>
            <Button style={{ marginRight: '15px' }} variant="contained" disabled={activeStep === 0} onClick={handleBack} className={props.backButton} onClick={handleBackSave}>Yza</Button>
            {!errors.address &&
                // !errors.workName &&
                !errors.homePhone &&
                !errors.inviteDate &&
                inviteDate !== 'Invalid Date' &&
                inviteDate !== null &&
                !errors.inviteTime &&
                // !errors.salary &&
                // !errors.experience &&
                !errors.phone ?
                <Button variant="contained" color="primary" onClick={setData}>Indiki</Button> : <Button variant="contained" color="primary" disabled>Indiki</Button>}

            </div>


        </div>
    )

}



export default DocUserDetail