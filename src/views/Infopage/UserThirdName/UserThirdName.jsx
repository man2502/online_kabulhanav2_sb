import { ErrorMessage } from "@hookform/error-message"
import { TextField } from "@material-ui/core"
import React from "react"
import { Controller } from "react-hook-form"
import actionMessages from "src/common/actionMessages"
import s from "./../Email/Email.module.css"


const UserThirdName = (props) => {
    
    return (
        <div className={s.wrapper}>
            <Controller
                name="user_third_name"
                defaultValue=''
                control={props.control}
                rules={{
                    required: {value:true, message: actionMessages().required},
                    minLength: {value:3 , message: actionMessages().minLength(3)}
                    // pattern: {
                    //     value:/^[a-zA-Z]+ [a-zA-Z]+$/,
                    //     message: 'write name in correct form'
                    // }
                }}
                as={
                    <TextField error={props.errors.user_third_name? true: false} variant="outlined" label="Atasynyň ady" fullWidth />
                }


            />
            {props.errors.user_third_name&&<div style={{textAlign:'left'}} className='errors'>{props.errors.user_third_name.message}</div>}
            
           
            
        </div>
    )
}


export default UserThirdName