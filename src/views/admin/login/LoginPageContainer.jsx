import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { clearReset, clearThunk, loginUserThunk } from 'src/redux/profilePage-reducer'
import LoginPage from './LoginPage'

const LoginPageContainer = (props) => {
    const reset =()=>{
        props.clearThunk()
    }
    useEffect(()=>{
        reset()
    },[])
    if (props.isAuth) {
        return (
            <Redirect to='/online/main' />
        )
    }
    else {
    
        return (
            <LoginPage {...props} />
        )
    }
}

const mapStateToProps = (state) => {
    const baseURL = state.profilePage
    return {
        isAuth: baseURL.isAuth,
        error: baseURL.error,
        isFetching: baseURL.isFetching,
        isConnected: baseURL.isConnected
        
    }
}


export default connect(mapStateToProps, {
    login: loginUserThunk,
    clearThunk,
    clearReset,
})(LoginPageContainer)