import React, { useEffect } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Loading } from "src/App"
import { getUserDataThunk } from "src/redux/profilePage-reducer"
import withAuthRedirect from "../hoc/withAuthRedirect"
import PublicPay from "./PublicPay"


const PublicPayContainer = (props)=>{
    useEffect(()=>{
        if (props.isAuth&&props.user_name.length<=1){
            props.getUserDataThunk()
        }
    },[])
    return(
        <React.Suspense fallback={<Loading />}>
            <PublicPay {...props}/>
        </React.Suspense>
    )
}

const mapStateToProps = (state) =>{
    return{
        isAuth: state.profilePage.isAuth,
        user_name: state.profilePage.user.userName,
        isFetching: state.profilePage.isFetching,
        
    }
}

export default compose(
    connect(mapStateToProps,{
        getUserDataThunk}),
        withAuthRedirect
    
)(PublicPayContainer)