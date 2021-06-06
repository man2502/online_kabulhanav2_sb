import React from  "react"
import { connect } from "react-redux"
import { Redirect} from "react-router-dom"
import { compose } from "redux"
import { resetEmailThunk } from "src/redux/profilePage-reducer"
import ResetPassowrd from "./ResetPassword"

const ResetPassowordContainer = (props) =>{
    if (props.isAuth) {
        return (
            <Redirect to='/online/main' />
        )
    }
    return(

        <ResetPassowrd {...props}/>
    )
}


const mapStateToProps =(state) =>{
    const baseURL = state.profilePage
    return{
        resetEmailSuccess : baseURL.postEmailSuccess,
        resetEmailErrorMessage: baseURL.postEmailErrorMessage,
        isAuth: baseURL.isAuth,
        isFetching: baseURL.isFetching,
        isConnected: baseURL.isConnected,

    }
}

export default compose(
    connect(mapStateToProps,{
    resetEmailThunk
}),

)(ResetPassowordContainer) 

