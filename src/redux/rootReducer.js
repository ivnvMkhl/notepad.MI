import { combineReducers } from 'redux'
import { noteReducer } from './noteReducer'
import { appReducer } from './appReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  note: noteReducer,
  app: appReducer,
  user: userReducer,
})
