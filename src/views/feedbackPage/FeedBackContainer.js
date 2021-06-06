import { Suspense } from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Loading } from "src/App"
import { clearReset, getUserDataThunk, postFeedBackThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import FeedBack from "./FeedBack"





const FeedBackContainer = (props) => {
    
    useEffect(() => {
        if (props.isAuth && props.user_name.length <= 1) {
            props.getUserDataThunk()
        }
    }, [])
    // console.log('render feedBack page')
    
    return (
        <div>
            <Suspense fallback={<Loading />}>
                <FeedBack {...props} />
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
        resetSuccess: baseURL.passwordResetSuccess
    }
}

export default compose(
    connect(mapStateToProps, {
        clearReset, getUserDataThunk, post: postFeedBackThunk
    }),
    withAuthRedirect
)(FeedBackContainer)