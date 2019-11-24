import { combineReducers } from 'redux'
import listReducer from './lists/list.reducer'
import searchReducer from './lists/list.reducer'

const rootReducer = combineReducers({
  listReducer,
  searchReducer,
})

export default rootReducer
