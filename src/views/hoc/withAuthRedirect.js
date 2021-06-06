import React from "react"
import { Redirect } from "react-router-dom"
import {connect} from 'react-redux';


let mapStateToProps = (state)=>{
    return {
        isAuth: state.profilePage.isAuth
    }
}

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) return <Redirect to="/select"/>

            return <Component {...this.props}/>
        }
    }
    
    let connectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return connectedAuthRedirectComponent;
}


export default withAuthRedirect 