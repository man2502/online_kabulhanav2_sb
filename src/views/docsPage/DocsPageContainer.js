import DocsPage from "./DocsPage"
import { compose } from "redux"
import withAuthRedirect from "../hoc/withAuthRedirect"
import React from 'react'
import { clearThunk, getUserDataThunk, postActionThunk } from "src/redux/profilePage-reducer"
import { connect } from "react-redux"
import { Loading } from "src/App"



class DocsPageContainer extends React.PureComponent {
    // shouldComponentUpdate(){
    //     return false
    // }
    componentDidMount(){
        if (this.props.isAuth&&this.props.user_name.length<=1){
            this.props.getUserDataThunk()
        }
    }
    render(){
        return(
            <React.Suspense fallback={<Loading />}>
                <DocsPage {...this.props} />
            </React.Suspense>
        )
    }
}


const mapStateToProps = (state) => {
    const baseURL = state.profilePage
    return {
        isAuth:baseURL.isAuth,
        user_name:baseURL.user.userName,
        offeredDocData:baseURL.offeredDocData,
        docModeData:baseURL.docModeData,
        activeDocMode:baseURL.activeDocMode,
        contacts:baseURL.contacts,
        isFetching:baseURL.isFetching,
        passportSeries: baseURL.passportSeries
    }
}

export default compose(
    connect(mapStateToProps, {
        clearThunk,
        postActionThunk,
        getUserDataThunk
    }),
    withAuthRedirect
)(DocsPageContainer)