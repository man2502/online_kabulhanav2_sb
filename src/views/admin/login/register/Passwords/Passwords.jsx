import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import actionMessages from 'src/common/actionMessages'


const Passwords = (props) => {
    const { t, i18n } = useTranslation();
    const aMessages = actionMessages()
    return (
        <div>
            <FormControl className={props.classes.margin + "" + props.classes.textField} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password" error={props.errors.password}>{t('Password')}</InputLabel>
                <Controller
                    control={props.control}
                    rules={{
                        required: {value:true, message: aMessages.required},
                        minLength: {value: 8, message: aMessages.minLength(8)}
                    }}
                    name="password"
                    defaultValue=''
                    as={
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type='password'
                            label={t('Password')}
                            error={props.errors.password ? true : false}

                        />
                    }
                />
            </FormControl>
            {props.errors.password&&<div style={{textAlign:'left'}} className='errors'>{props.errors.password.message}</div>}
            <br />
            <br />
            <FormControl className={props.classes.margin + "" + props.classes.textField} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment1-password" error={props.errors.password_repeat}>{t('PasswordRepeat')}</InputLabel>
                <Controller
                    control={props.control}
                    rules={{
                        required:{value:true,message:aMessages.required},
                        minLength: 8,
                        validate: value => value === props.watchPass
                    }}
                    name="password_repeat"
                    defaultValue=''
                    render={({ onChange, value }) => (
                        <OutlinedInput
                            value={value ? value : ""}
                            id="outlined-adornment1-password"
                            type='password'
                            label={t('PasswordRepeat')}
                            error={props.errors.password_repeat ? true : false}
                            onChange={(e) => {
                                onChange(e)
                                props.handleChange(e)
                            }}
                            error={(props.watchPass1 && props.watchPass !== props.watchPass1) || props.errors.password_repeat}

                        />
                    )} />
            </FormControl>
            {props.errors.password_repeat&&<div style={{textAlign:'left'}} className='errors' >{props.errors.password_repeat.message}</div>}
            {props.watchPass1 && props.watchPass !== props.watchPass1 ? <span className='errors'>Açarlar deň gelenok</span> : ''}

        </div>
    )
}


export default Passwords