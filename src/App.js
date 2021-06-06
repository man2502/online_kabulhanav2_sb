import React, { Component, memo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { CircularProgress, makeStyles } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'absolute',
    zIndex: '99999',
    top: 0, left: 0, right: 0, bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  content: {
    height: '10vh',
    padding: '25px',
    display: 'flex', alignItems: 'center', borderRadius: '15px', backgroundColor: '#fff', zIndex: '999999',
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '95%'
    },

  },
  text: {
    marginLeft: '25px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem'
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.1rem'
    },
    fontSize: '1.5rem',
  },
  minWidth:{
    minWidth:'337px'
  }
}))
export const Loading = memo(() => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper} >
      <div className={classes.content}>
        <CircularProgress />  <span className={classes.text}> Bir az garaşyň. Maglumatlar ýüklenilýär...</span>
      </div>
    </div>
  )
})
export const LoadingClosed = memo(() => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper} style={{backgroundColor: 'rgba(100,100,100,1)',}}>
      <div className={classes.content}>
        <CircularProgress />  <span className={classes.text}> Bir az garaşyň. Maglumatlar ýüklenilýär...</span>
      </div>
    </div>
  )
})
// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const LoginPageContainer = React.lazy(() => import('./views/admin/login/LoginPageContainer'));
const RegisterContainer = React.lazy(() => import('./views/admin/login/register/RegisterContainer'));
const MainSelectContainer = React.lazy(() => import('./views/mainSelect/MainSelectContainer'))
const ResetOutContainer = React.lazy(() => import('./views/admin/login/ResetOut/ResetOutContainer'))

class App extends Component {
  
  render() {
  
    return (
      <BrowserRouter>
        <React.Suspense fallback={<LoadingClosed />}>
        <div style={{minWidth:337}}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/select" />
            </Route>
           
            <Route exact path="/login" name="Login" render={() => <LoginPageContainer />} />
            <Route exact path="/select" name="MainSelectContainer" render={() => <MainSelectContainer />} />
            <Route exact path="/register" name="RegisterPage" render={() => <RegisterContainer />} />
            <Route path="/password/reset/" name="RegisterPage" render={() => <ResetOutContainer />} />
            
            <Route path="/" name="Baş bölüm" render={props => <TheLayout {...props} />} />
            {/* <Route render={(props) => <Page404 {...props} /> } /> */}
          </Switch>
        </div>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
