import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import NumberFormat from "react-number-format"
import actionMessages from "src/common/actionMessages"
import s from "./../Email/Email.module.css"


const UserPhone = (props) => {
    const {t} = useTranslation();
    
    return (
        <div className={s.wrapper}>
            <Controller
                name="user_phone"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value: true, message: actionMessages().required},
                   
                }}
                as={
                    <NumberFormat {...props} placeholder={'+993 (6 )'} error={props.errors.user_phone? true: false} fullWidth  customInput={TextField} variant={'outlined'} label={t('phoneNumber')}  format="+993 (6#) ##-##-##"/>
                    
                }

                // <TextField error={props.errors.Email? true: false} variant="outlined" label="Telefon" fullWidth />
            />
            
            {props.errors.user_phone&&<div style={{textAlign:'left'}} className='errors'>{props.errors.user_phone.message}</div>}
           
            
        </div>
    )
}


export default UserPhone