// import { ErrorMessage } from "@hookform/error-message"
import { FormControl, InputLabel, Select, TextField } from "@material-ui/core"
import React from "react"
import NumberFormat from "react-number-format"
import s from "./Passport.module.css"

const Passport = (props) => {
    var random = Math.random()
    
    return (
        <div className={s.wrapper} >
            <FormControl variant="outlined" style={{width:'20%'}}>
                <InputLabel htmlFor={`outlined-passportMode-simple98`}>Belgi-1</InputLabel>
                <Select
                    onChange={props.test}
                    native
                    defaultValue={props.data[0].length>0? props.data[0]:'none'}
                    label={'Belgi-1'}
                    name={'passport_first'}
                    inputProps={{
                        id: `outlined-passportMode-simple98`,
                    }}
                >
                    <option aria-label="None" value="" />
                    {props.passportSeries.seria_first.map( i =>{
                        return(
                            <option value={i.value} key={i.value}>{i.name}</option>
                        )
                    })}

                </Select>

            </FormControl>
            <FormControl variant="outlined" style={{width:'20%'}}>
                <InputLabel htmlFor={`outlined-passportMode-simple99`}>Belgi-2</InputLabel>
                <Select
                    onChange={props.test}
                    native
                    defaultValue={props.data[1].length>0? props.data[1]:'none'}
                    label={'Belgi-2'}
                    name={'passport_second'}
                    inputProps={{
                        id: `outlined-passportMode-simple99`,
                    }}
                >
                    <option aria-label="None" value="" />
                    {props.passportSeries.seria_second.map( i =>{
                        return(
                            <option value={i.value} key={i.value}>{i.name}</option>
                        )
                    })}

                </Select>

            </FormControl>
            <NumberFormat style={{width:'60%'}} defaultValue={props.data[2].length>0?props.data[2]:'none'} innerRef={props.register} {...props} name='passport' placeholder={'123456'} error={props.errors.passport && props.dirty.passport} onChange={props.test} customInput={TextField} variant={'outlined'} label="Passport" format="######" />
            
        </div>
    )
}


export default Passport