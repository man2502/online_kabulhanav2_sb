
import { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { setScheduleThunk } from 'src/redux/calendar-reducer'
import MeetDate from './MeetDate'
import React from 'react'



const MeetDateContain = (props) =>{
    
    const [dateTime,setDateTime] = useState({})
  
    const aviable =[]
    const returnBronTimes =(time,date)=>{
     
        switch(props.docType){
            case 'card':{
                
                props.bron_times_offered_card.map(t=>{
                    var dd1 = new Date(t.prepared_time).getDate()
                    var mm1 = new Date(t.prepared_time).getMonth()+1
                    var yy1= new Date(t.prepared_time).getFullYear()
                    var dd2 = new Date(date).getDate()
                    var mm2 = new Date(date).getMonth()+1
                    var yy2= new Date(date).getFullYear()

                    if (dd1==dd2&&mm1==mm2&&yy1==yy2){    
                        var hh = new Date(t.prepared_time).getHours()
                        aviable.push(hh)
                    }
                    
                })
                setDateTime({...time, disabled:aviable})
                break
            }
            case 'credit':{
                
                props.bron_times_offered_credit.map(t=>{
                    var dd1 = new Date(t.prepared_time).getDate()
                    var mm1 = new Date(t.prepared_time).getMonth()+1
                    var yy1= new Date(t.prepared_time).getFullYear()
                    var dd2 = new Date(date).getDate()
                    var mm2 = new Date(date).getMonth()+1
                    var yy2= new Date(date).getFullYear()

                    if (dd1==dd2&&mm1==mm2&&yy1==yy2){    
                        var hh = new Date(t.prepared_time).getHours()
                        aviable.push(hh)
                    }
                    
                })
                setDateTime({...time, disabled:aviable})
                break
            }
            case 'document':{
                
                props.bron_times_offered_document.map(t=>{
                    var dd1 = new Date(t.prepared_time).getDate()
                    var mm1 = new Date(t.prepared_time).getMonth()+1
                    var yy1= new Date(t.prepared_time).getFullYear()
                    var dd2 = new Date(date).getDate()
                    var mm2 = new Date(date).getMonth()+1
                    var yy2= new Date(date).getFullYear()

                    if (dd1==dd2&&mm1==mm2&&yy1==yy2){    
                        var hh = new Date(t.prepared_time).getHours()
                        aviable.push(hh)
                    }
                    
                })
                setDateTime({...time, disabled:aviable})
                break
            }
           
            
            default: return []

        }
    }
    const returnDate =(date)=>{
        var a = new Date(date).getDay()
        props.schedules.map(i=>{
            if (i.day_of_week === a){ 
                
                // setDateTime(i)
                returnBronTimes(i,date)
            }
        })
    }
    
    return(
        <div>
            <MeetDate returnDate={returnDate}  dateTime={{...dateTime}} {...props}/>
        </div>
    )
}

class MeetDateContainer extends React.Component {
    componentDidMount(){
        // this.props.setScheduleThunk()
    }
    render(){
        return(
            <MeetDateContain {...this.props}/>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        schedules : state.calendar.schedule,
        bron_times_offered_card:state.calendar.bron_times_offered_card,
        bron_times_offered_document:state.calendar.bron_times_offered_document,
        bron_times_offered_credit:state.calendar.bron_times_offered_credit, 
    }
}

export default connect(mapStateToProps,{
   setScheduleThunk 
})(MeetDateContainer)