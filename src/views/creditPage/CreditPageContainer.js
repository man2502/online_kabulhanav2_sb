import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { compose } from "redux"
import { Loading } from "src/App"
import { clearThunk, getUserDataThunk, postActionThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import CreditPage from "./CreditPage"


class CreditPageContainer extends React.Component {
    componentDidMount() {
        if (this.props.isAuth && this.props.user_name.length <= 1) {
            this.props.getUserDataThunk()
        }
    }
    render() {
        // console.log('render credit page')
        if (!this.props.isPerson ) {
            return <Redirect to='/main' />
        }
        return (
            <div >  
                <React.Suspense fallback={<Loading />}>
                    <CreditPage {...this.props} />
                </React.Suspense>
            </div>
        )



    }
}

const mapStateToProps = (state) => {
    const baseURL = state.profilePage
    return {
        offeredDocData:baseURL.offeredCreditData,
        docModeData:baseURL.creditTypesData,
        activeDocMode:baseURL.activeCardType,
        isPerson:baseURL.user.isPerson,
        contacts:baseURL.contacts,
        isFetching:baseURL.isFetching,
        isAuth:baseURL.isAuth,
        user_name:baseURL.user.userName,
        passportSeries : baseURL.passportSeries
    }
}

export default compose(
    connect(mapStateToProps, {
        clearThunk,
        postActionThunk,
        getUserDataThunk
    }),
    withAuthRedirect
)(CreditPageContainer)


