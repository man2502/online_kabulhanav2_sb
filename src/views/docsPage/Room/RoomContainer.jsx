
import React from "react"
import { connect } from "react-redux"
import { getBronsThunk, setScheduleThunk } from "src/redux/calendar-reducer"

import Room from "./Room"

class RoomContainer extends React.Component {
    componentDidMount() {
      
    }
    render() {
        return (
            <div>
                <Room {...this.props}  />
            </div>
        )
    }



}

const mapStateToProps =(state)=>{
    return{
        isFetching:state.profilePage.isFetching
    }
}

export default connect(mapStateToProps,{
    setScheduleThunk,getBronsThunk
})(RoomContainer)
