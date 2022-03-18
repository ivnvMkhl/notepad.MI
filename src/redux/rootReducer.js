import { combineReducers } from 'redux'
import { noteReducer } from './note_reducer/noteReducer'
import { appReducer } from './app_reducer/appReducer'
import { userReducer } from './user_reducer/userReducer'

export const rootReducer = combineReducers({
  note: noteReducer,
  app: appReducer,
  user: userReducer,
})
