
import { getUserDataThunk } from "./profilePage-reducer"

const INITIAL_SUCCES ="INITIAL_SUCCES"
const INIT = "INIT"
const initialState = {
    sidebarShow: 'responsive',
    isPerson: null,
    initialized: false,
  }
  

export const initialSucces = () => ({
    type: INITIAL_SUCCES,
})

export const setInitialized = (init) =>({
  type: INIT,
  init
})

export const initializeApp = () => (dispatch) => {
    dispatch(getUserDataThunk()).then(
      
        ()=>{dispatch(initialSucces())}
    )
}


  const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      case 'setTempUserType':
        return {...state, ...rest }
      case INITIAL_SUCCES:
        return {
          ...state,
          initialized: true
        }
        case INIT:
        return {
          ...state,
          initialized: false
        }
      default:
        return state
    }
  }


  export default changeState