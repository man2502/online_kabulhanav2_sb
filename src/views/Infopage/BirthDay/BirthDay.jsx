// import { ErrorMessage } from "@hookform/error-message"
import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import actionMessages from "src/common/actionMessages"
import getCurrentDate from "src/common/getCurrentDate"
import s from "./../Email/Email.module.css"


const BirthDay = (props) => {
    
    return (
        <div className={s.wrapper}>
            <Controller
                name="birthDay"
                defaultValue={()=>{getCurrentDate()}}
                control={props.control}
                rules={{
                    required: {value:true, message: actionMessages().required },
                   minLength: {value: 3, message: actionMessages().minLength(3)}
                }}
                as={
                    <TextField lang='fr-CO' type='datetime'  InputLabelProps={{ shrink: true }} name='birthday' variant="outlined" label="Doglan güni" fullWidth />

                }


            />
            
            {props.errors.birthDay&&<div style={{textAlign:'left'}} className='errors'>{props.errors.birthDay.message}</div>}
          
            
        </div>
    )
}


export default BirthDay