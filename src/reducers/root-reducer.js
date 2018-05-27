import React from 'react'
import { combineReducers } from 'redux'
import MessageReducer from './message-reducer'

export default combineReducers({
  messages: MessageReducer
})
