import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import NumberFormat from "react-number-format"
import actionMessages from "src/common/actionMessages"
import s from "./../Email/Email.module.css"


const PhoneNumber = (props) => {
   
    
    return (
        <div className={s.wrapper}>
            <Controller
                name="home_phone"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value: true, message: actionMessages().required},
                   
                }}
                as={
                    <NumberFormat {...props} placeholder={''} error={props.errors.user_phone? true: false} fullWidth  customInput={TextField} variant={'outlined'} label="Öý-telefony"/>
                    
                }

                // <TextField error={props.errors.Email? true: false} variant="outlined" label="Telefon" fullWidth />
            />
            
            {props.errors.home_phone&&<div style={{textAlign:'left'}} className='errors'>{props.errors.home_phone.message}</div>}
           
            
        </div>
    )
}


export default PhoneNumber