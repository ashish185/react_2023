import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './redux-form-components/UserForm/userReducer'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  userReducer,
  form: formReducer
})

const store = createStore(rootReducer)
export default store;