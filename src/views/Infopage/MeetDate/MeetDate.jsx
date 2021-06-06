import { FormControl, InputLabel, Select } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import React, { useEffect } from 'react'

import actionMessages from 'src/common/actionMessages'


const MeetDate = (props) => {
    const dateTimes = (e)=>{
        props.returnDate(e)
    }
    if (!props.dateTime.start_time_card){
        var a = new Date ()
        dateTimes(a)
        
    }
    
    const timeArr =[]
    if (props.dateTime.start_time_card){

        switch(props.docType){
            case 'card':{
                var s = Number(props.dateTime.start_time_card.substring(0,2))
                var f = Number(props.dateTime.end_time_card.substring(0,2))
                for(var i=0;i<f-s;i++){
                    if (props.dateTime.disabled.length>0){
                            const check = (sum)=>{
                                for (var j=0;j<props.dateTime.disabled.length;j++){
                                    if (sum === props.dateTime.disabled[j]) return true
                                    else return false
                                }
                            }
                        
                           
                            timeArr.push({start:s+i,finish:s+i+1,disabled:check(s+i)})
                    }
                    else timeArr.push({start:s+i,finish:s+i+1})
                }
                break
            }
            case 'document':{
                var s = Number(props.dateTime.start_time_document.substring(0,2))
                var f = Number(props.dateTime.end_time_document.substring(0,2))
                for(var i=0;i<f-s;i++){
                    if (props.dateTime.disabled.length>0){
                            const check = (sum)=>{
                                for (var j=0;j<props.dateTime.disabled.length;j++){
                                    if (sum === props.dateTime.disabled[j]) return true
                                    else return false
                                }
                            }
                        
                           
                            timeArr.push({start:s+i,finish:s+i+1,disabled:check(s+i)})
                    }
                    else timeArr.push({start:s+i,finish:s+i+1})
                }
                break
            }

            case 'credit':{
                var s = Number(props.dateTime.start_time_credit.substring(0,2))
                var f = Number(props.dateTime.end_time_credit.substring(0,2))
                for(var i=0;i<f-s;i++){
                    if (props.dateTime.disabled.length>0){
                            const check = (sum)=>{
                                for (var j=0;j<props.dateTime.disabled.length;j++){
                                    if (sum === props.dateTime.disabled[j]) return true
                                    else return false
                                }
                            }
                        
                           
                            timeArr.push({start:s+i,finish:s+i+1,disabled:check(s+i)})
                    }
                    else timeArr.push({start:s+i,finish:s+i+1})
                }
                break
            }
            case 'kabulhana':{
                var s = Number(props.dateTime.start_time_kabulhana.substring(0,2))
                var f = Number(props.dateTime.end_time_kabulhana.substring(0,2))
                for(var i=0;i<f-s;i++){
                    if (props.dateTime.disabled.length>0){
                            const check = (sum)=>{
                                for (var j=0;j<props.dateTime.disabled.length;j++){
                                    if (sum === props.dateTime.disabled[j]) return true
                                    else return false
                                }
                            }
                        
                           
                            timeArr.push({start:s+i,finish:s+i+1,disabled:check(s+i)})
                    }
                    else timeArr.push({start:s+i,finish:s+i+1})
                }
                break
            }
            
            default: return []

        }
    }
       
    return (
        <div>
            <KeyboardDatePicker
                style={{width:'60%'}}
                format="dd-MM-yyyy"
                okLabel='Saýla'
                margin='none'
                cancelLabel='Yza'
                disablePast={true}
                id="date-picker-invite_date"
                label="Rahat senäni saýlaň"
                name='inviteDate'
                inputVariant='outlined'
                variant='dialog'
                invalidDateMessage={actionMessages().correctDate}
                fullWidth
                defaultValue={props.hasHistory ? props.history_inviteDate : new Date()}
                value={props.inviteDate}

                // error={(props.errors.inviteDate && props.dirty.inviteDate) || (props.date_errors_invite.length > 2 && props.dirty.inviteDate)}
                invalidLabel={actionMessages().correctDate}
                minDateMessage={actionMessages().correctDate}
                maxDateMessage={actionMessages().correctDate}

                onError={(e) => { props.set_date_errors_invite(e) }}
                onChange={(e) => {
                    dateTimes(e)
                    props.handleOnChange({
                        target: {
                            value: (e), name: 'inviteDate'
                        }
                    })

                }}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <FormControl variant="outlined" style={{width:'40%'}}>
                <InputLabel htmlFor={`outlined-passportMode-simple98`}>Rahat wagty saýlaň</InputLabel>
                <Select
                    onChange={props.handleOnChange}
                    native
                    defaultValue={props.inviteTime}
                    label={'Rahat wagty saýlaň'}
                    name={'inviteTime'}
                    inputProps={{
                        id: `outlined-passportMode-simple98`,
                    }}
                >
                    <option aria-label="None" value="" />
                    {timeArr.map( i =>{
                         return(
                            <option value={i.start} disabled={i.disabled} style={i.disabled?{color:'#ddd'}:{color:'#000'}} key={i.start}>{i.start}:00 - {i.finish}:00</option>
                        )
                    })}

                </Select> </FormControl>
               

           
        </div>
    )
}

export default MeetDate