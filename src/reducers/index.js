import { combineReducers } from "redux"
import { reducer as reducerForm } from 'redux-form'
import weatherDataReducer from './weatherDataReducer'


const rootReducer = combineReducers({
  form: reducerForm,
  weatherDataReducer,
})

export default rootReducer;
