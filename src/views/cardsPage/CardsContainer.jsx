import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Loading } from "src/App"
// import { setScheduleThunk } from "src/redux/calendar-reducer"
import { clearThunk, getUserDataThunk, postActionThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import CardsPage from "./CardsPage"

class CardsContainer  extends React.Component{
    componentDidMount(){
        if (this.props.isAuth&&this.props.user_name.length<=1){
            this.props.getUserDataThunk()
            
        }
    }
    render(){
    // props.clearThunk()
    // console.log('render cardPage')
    return(
        <div>
            <React.Suspense fallback={<Loading />}>

           <CardsPage {...this.props}/> 
            </React.Suspense>
        </div>
    )
}}

const mapStateToProps = (state) =>{
    const baseURL = state.profilePage
    return{
        offeredDocData: baseURL.offeredCardData,
        docModeData: baseURL.cardTypesData,
        activeDocMode: baseURL.activeCardType,
        contacts: baseURL.contacts,
        isFetching: baseURL.isFetching,
        isAuth: baseURL.isAuth,
        user_name: baseURL.user.userName,
        passportSeries: baseURL.passportSeries,
        branchsData: baseURL.branchsData

    }
}

export default compose(
    connect(mapStateToProps,{
        clearThunk,
        postActionThunk,
        getUserDataThunk,
        // setScheduleThunk
    }),
    withAuthRedirect

)(CardsContainer) 
