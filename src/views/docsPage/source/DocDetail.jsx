import { Button, TextField} from "@material-ui/core"
import React, { useMemo } from "react"
import useForm from "./../../../common/form-validate/useForm"
import actionMessages from "src/common/actionMessages";
import Passport from "src/views/Infopage/Passport/Passport";
import ConfirmInfo from "src/views/base/confirmInfo/ConfirmInfo";


const DocDetail = (props) => {

    const stateSchema = {
        name: { value: '', error: '' },
        surname: { value: '', error: '' },
        thirdName: { value: '', error: '' },
        passport: { value: '', error: '' },
        passport_first:{value:'',error:''},
        passport_second:{value:'',error:''}
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
          
        },
        // passport: {
        //     required: true,
        //     validator: {
        //         func: value=>  /[I*V][-][ALMBDalmbd]{1}[BHRNZHŞbhrnzhş]{1}( *)[0-9]{6}$/g.test(value),
        //         error: 'Passport belgisini dogry giriziň'
        //     }
        // }
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
        passport_second:{
            required:true
        }
    }
    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema)

    const { name, surname, thirdName, passport, passport_first ,passport_second} = values
    const { handleNext,  register, setCollection, handleBack, activeStep } = props
    const [open, setOpen] = React.useState(false);
    // props.setCollection(values)
    const test = (e) => {
        handleOnChange(e)
    }
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
    const cWidth = document.body.clientWidth > 411
    const CurrentDate = useMemo(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var hour = String(today.getHours()).padStart(2, '0')
        var minutes = String(today.getMinutes()).padStart(2, '0')
        today = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minutes
        
        return today
    }, [open])
    const createConfirmInfo = {
        priceData:[
            {value:'Online hyzmaty', name:7}  
        ],
        data:[
            {value:'Ady:', name:name},
            {value:'Familiýasy:', name:surname},
            {value:'Atasynyň ady:', name:thirdName},
            {value:'Passport:', name:passport_first+'-'+passport_second+passport}
        ]
    }
    // console.log('render docdetail')
    return (
        <div >
            <ConfirmInfo open={open} data={createConfirmInfo} handleClose={handleClose} agree={agree} cWidth={cWidth} backButton={props.backButton}/>
            

            <TextField innerRef={register} name='name' variant="outlined" label="Ady" fullWidth value={name} onChange={test} error={errors.name && dirty.name} />
            {errors.name && dirty.name && <span className='errors'>{errors.name}</span>}
            <br />
            <br />
            <TextField innerRef={register} name='surname' variant="outlined" label="Familiýasy" fullWidth value={surname} onChange={test} error={errors.surname && dirty.surname} />
            {errors.surname && dirty.surname && <span className='errors'>{errors.surname}</span>}
            <br />
            <br />
            <TextField innerRef={register} name='thirdName' variant="outlined" label="Atasynyň ady" fullWidth value={thirdName} onChange={test} error={errors.thirdName && dirty.thirdName} />
            {errors.thirdName && dirty.thirdName && <span className='errors'>{errors.thirdName}</span>}
            <br />
            <br />
            <Passport passportSeries={props.passportSeries} register={register} test={test} errors={errors} dirty={dirty}/>

            {/* <TextField innerRef={register} name='passport' variant="outlined" label="Passport" placeholder="I-AŞ123456" fullWidth value={passport} onChange={test} error={errors.passport && dirty.passport} /> */}
            {errors.passport && dirty.passport && <span className='errors' style={{marginLeft:'40%'}}>{errors.passport}</span>}
            <br />
            <br />
            <TextField innerRef={register} type='datetime-local' InputLabelProps={{ shrink: true }} defaultValue={CurrentDate} name='inviteDate' variant="outlined" label="Bellenen wagty" fullWidth />
            <br/><br/>
            <Button style={{ marginRight: '15px' }} variant="contained" disabled={activeStep === 0} onClick={handleBack} className={props.backButton} >Yza</Button>
            {!errors.name &&
                !errors.surname &&
                !errors.thirdName &&
                !errors.passport &&
                !errors.passport_first&&
                !errors.passport_second?<Button variant="contained" color="primary" onClick={setData}>Indiki</Button> : <Button variant="contained" color="primary" disabled>Indiki</Button>


            }


        </div>
    )

}



export default DocDetail