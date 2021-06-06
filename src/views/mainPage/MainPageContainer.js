import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { LoadingClosed } from "src/App";
import { initializeApp } from "src/redux/changes-reducer";
import { getUserDataThunk } from "src/redux/profilePage-reducer";
import withAuthRedirect from "../hoc/withAuthRedirect";
import MainPage from "./MainPage";
// import { Jumbotrons } from '../base'

class MainPageContainer extends React.Component {
  componentDidMount() {
    if (this.props.isAuth && this.props.userName.length <= 1) {
      // this.props.getUserData()
      this.props.initializeApp();
    }
  }
  render() {
    if (!this.props.initialized) {
      return <LoadingClosed />;
    }

    // debugger

    return (
      <div>
        <React.Suspense fallback={<LoadingClosed />}>
          {this.props.isAuth ? (
            <MainPage {...this.props} />
          ) : (
            <Redirect to="/login" />
          )}
        </React.Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.profilePage.isAuth,
    isPerson: state.profilePage.user.isPerson,
    user_name: state.profilePage.user.isPerson
      ? [state.profilePage.user.name, state.profilePage.user.surname]
      : [state.profilePage.user.name],
    offeredDocData: state.profilePage.offeredDocData,
    offeredCardData: state.profilePage.offeredCardData,
    offeredCreditData: state.profilePage.offeredCreditData,
    userName: state.profilePage.user.userName,
    ısFetchıng: state.profilePage.isFetching,
    initialized: state.changes.initialized,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserData: getUserDataThunk,
    initializeApp,
  }),
  withAuthRedirect
)(MainPageContainer);
