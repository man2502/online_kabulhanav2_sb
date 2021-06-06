import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './redux/redux-store'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme  = createMuiTheme({
  palette:{
    primary:{
      main:'#35B835',
      contrastText:'#fff'
    },

  },
})



React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}  >
      <ThemeProvider theme={theme}>
      <App isAuth={store.getState().profilePage.isAuth}/>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
