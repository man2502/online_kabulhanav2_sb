import React, { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Loading } from "src/App"
import { getUserDataThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import ProfilePage from "./ProfilePage"

const ProfilePageContainer = (props) => {
    useEffect(()=>{
        if (props.isAuth&&props.userName.length<=1){
            props.getUserDataThunk()
        }
    },[])
    console.log('render feedBack page')

    return (
        <div>
            <React.Suspense fallback={<Loading />}>
                <ProfilePage {...props} />
            </React.Suspense>
        </div>
    )
}




const mapStateToProps = (state) => {
    const base = state.profilePage.user
    return {
        userName: base.userName,
        userEmail: base.userEmail,
        userPhone: base.userPhone,
        name: base.name,
        surname: base.surname,
        isAuth: state.profilePage.isAuth
    }
}



export default compose(
    connect(mapStateToProps, {
        getUserDataThunk,
    }),
    withAuthRedirect,
)(ProfilePageContainer)