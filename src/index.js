import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(rootReducer)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
