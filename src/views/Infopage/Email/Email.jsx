// import { ErrorMessage } from "@hookform/error-message"
import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import actionMessages from "src/common/actionMessages"
import s from "./Email.module.css"


const Email = (props) => {
    
    return (
        <div className={s.wrapper}>
            <Controller
                name="email"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value: true, message:actionMessages().required},
                    pattern: {
                        value:actionMessages().emailValidation,
                        message: actionMessages().email
                    }
                }}
                as={
                    <TextField error={props.errors.email? true: false} variant="outlined" label="Email" fullWidth />
                }
                
                />
                {props.errors.email&&<div style={{textAlign:'left'}} className='errors' >{props.errors.email.message}</div>}
            
           
            
        </div>
    )
}


export default Email