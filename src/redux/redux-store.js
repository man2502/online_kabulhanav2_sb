import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk"
import profilePageReducer from "./profilePage-reducer"
// import docsPageReducer from './docsPage-reducer'
import changeState from "./changes-reducer";
import calendarReducer from "./calendar-reducer";
// import loginPageReducer from "./loginPage-reducer";



const reducers = combineReducers({
    changes: changeState,
    calendar:calendarReducer,
    profilePage: profilePageReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare)) 

window.store = store
export default store