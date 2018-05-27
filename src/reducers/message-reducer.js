import React from 'react'

function MessageReducer(state = null, action) {
  const initialState = {}

  if (state) {
    switch (action.type) {
      default:
        return state
    }
  } else {
    return { ...initialState }
  }
}

export default MessageReducer
