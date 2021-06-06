import React, { Suspense, useEffect } from "react"
import { connect } from "react-redux"
import { Redirect, withRouter } from "react-router-dom"
import { compose } from "redux"
import { Loading } from "src/App"
import { clearReset, clearThunk, resetPasswordOutThunk } from "src/redux/profilePage-reducer"
import ResetOut from "./ResetOut"

const ResetOutContainer = (props) =>{
    const reset =()=>{
        props.clearThunk()
        props.clearReset()
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
                <Suspense fallback={<Loading />}>
                
                    <ResetOut {...props}/>

                </Suspense>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const baseURL = state.profilePage
    return {
        isAuth: baseURL.isAuth,
        isFetching: baseURL.isFetching,
        isConnected: baseURL.isConnected,
        resetMessage:baseURL.passwordResetMessage ,
        resetSuccess: baseURL.passwordResetSuccess,


    }
}

export default compose(
    connect(mapStateToProps,{
    clearThunk,
    reset: resetPasswordOutThunk,
    clearReset
}),
withRouter
)(ResetOutContainer) 