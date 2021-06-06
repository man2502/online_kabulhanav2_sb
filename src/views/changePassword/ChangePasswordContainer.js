
import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Loading } from 'src/App'
import { changePasswordThunk, clearReset, getUserDataThunk } from 'src/redux/profilePage-reducer'
import withAuthRedirect from '../hoc/withAuthRedirect'
import ChangePassword from './ChangePassword'


const ChangePasswordContainer = (props) => {
    const reset=()=>{
        props.clearReset()
    }
    useEffect(() => {
        reset()
        if (props.isAuth && props.user_name.length <= 1) {
            props.getUserDataThunk()
        }


    }, [])
    return (
        <Suspense fallback={<Loading />}>
            <ChangePassword {...props} />
        </Suspense>
    )
}

const mapStateToProps = (state) => {
    return {

        isAuth: state.profilePage.isAuth,
        user_name: state.profilePage.user.userName,
        isFetching: state.profilePage.isFetching,
        resetMessage: state.profilePage.passwordResetMessage,
        resetSuccess: state.profilePage.passwordResetSuccess,
    }
}

export default compose(connect(mapStateToProps, {
    getUserDataThunk,
    clearReset,
    change: changePasswordThunk
}),
    withAuthRedirect
)(ChangePasswordContainer)




