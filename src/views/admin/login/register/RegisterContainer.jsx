import { resetWarningCache } from "prop-types"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { clearThunk, registerUserThunk } from "src/redux/profilePage-reducer"
import Register from "./Register"


const RegisterContainer = (props) =>{
    const reset = async()=>{
        props.clearThunk()
    }
    useEffect(()=>{
        reset()
    },[])
    
    if (props.isAuth) {
        return (
            <Redirect to='/online/main' />
        )
    } else {
        return(
            
            <div>
                <Register {...props}/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const baseURL = state.profilePage
    return {
        username: state.profilePage.user.userName,
        isPerson: state.changes.isPerson,
        isRegistered: baseURL.isSuccesRegistered,
        isAuth: baseURL.isAuth,
        error: baseURL.error,
        isFetching: baseURL.isFetching,
        isConnected: baseURL.isConnected
    }
}

export default connect(mapStateToProps,{
    registerUserThunk,
    clearThunk
})(RegisterContainer)