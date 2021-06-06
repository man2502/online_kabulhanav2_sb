
import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import actionMessages from "src/common/actionMessages"
import s from "./../Email/Email.module.css"


const UserSurname = (props) => {
    const { t } = useTranslation();
    return (
        <div className={s.wrapper}>
            <Controller
                name="user_surname"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value:true, message: actionMessages().required},
                    minLength: {value:3, message: actionMessages().minLength(3)}
                }}
                as={
                    <TextField error={props.errors.user_surname? true: false} variant="outlined" label={t('surname')} fullWidth />
                }


            />
            {props.errors.user_surname&&<div style={{textAlign:'left'}} className='errors'>{props.errors.user_surname.message}</div>}

            
            
            
        </div>
    )
}


export default UserSurname