import React from 'react'
import { connect } from 'react-redux'
// import { getBronsThunk, setScheduleThunk } from 'src/redux/calendar-reducer'
import Selection from './Selection'


class SelectionContainer extends React.Component {
    componentDidMount(){
        // this.props.getBronsThunk()
        // this.props.setScheduleThunk()
    }
    render(){

        return(
            <Selection {...this.props}/>
        )
    }
}


const mapStateToProps =(state) =>{
    return{
        isFetching:state.profilePage.isFetching
    }
}

export default connect(mapStateToProps,{
    // getBrons Thunk,setScheduleThunk
})(SelectionContainer)