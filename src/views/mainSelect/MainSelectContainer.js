import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import MainSelect from "./MainSelect"



const MainSelectContainer = (props) => {
    if (props.isAuth) {
        return <Redirect to='/main' />
    }
    else {
        return (
            <div>
                <MainSelect {...props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.profilePage.isAuth,
        userName: state.profilePage.user.userName
    }
}
export default connect(mapStateToProps, {

})(MainSelectContainer)