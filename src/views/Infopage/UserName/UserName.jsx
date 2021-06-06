// import { ErrorMessage } from "@hookform/error-message"
import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import { useTranslation } from "react-i18next"
import actionMessages from "src/common/actionMessages"
import s from "./../Email/Email.module.css"


const UserName = (props) => {
    const { t} = useTranslation();
    return (
        <div className={s.wrapper}>
            <Controller
                name="user_name"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value:true, message: actionMessages().required },
                   minLength: {value: 3, message: actionMessages().minLength(3)}
                }}
                as={
                    <TextField error={props.errors.user_name? true: false} variant="outlined" label={t('name')} fullWidth />
                }


            />
            
            {props.errors.user_name&&<div style={{textAlign:'left'}} className='errors'>{props.errors.user_name.message}</div>}
          
            
        </div>
    )
}


export default UserName