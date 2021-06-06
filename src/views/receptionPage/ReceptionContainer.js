import { Suspense } from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Loading } from "src/App"
import { clearReset, getUserDataThunk, postReceptionThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import Reception from "./Reception"





const ReceptionContainer = (props) => {
    const reset = () => {
        props.clearReset()
    }
    useEffect(() => {
        if (props.isAuth && props.user_name.length <= 1) {
            props.getUserDataThunk()
        }
    }, [])
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <Reception {...props}/>
            </Suspense>
        </div>
    )
}

const mapStateToProps = (state) => {
    const baseURL = state.profilePage
    return {
        isFetching: baseURL.isFetching,
        isAuth: baseURL.isAuth,
        user_name: baseURL.user.userName,
        resetMessage: baseURL.passwordResetMessage,
        resetSuccess: baseURL.passwordResetSuccess,
        sections: baseURL.sections
    }
}

export default compose(
    connect(mapStateToProps, {
        clearReset, getUserDataThunk, post: postReceptionThunk
    }),
    withAuthRedirect
)(ReceptionContainer)