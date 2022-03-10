import React from 'react'
import { compose, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import App from './App'
import './style/index.scss'
import './firebase'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))

//, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
