// store.js
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

import localStorageHelper from './helpers/localStorageHelper'


const localStorage = new localStorageHelper()

localStorage.init()

// Default state
const defaultState = {
    projects: localStorage.getProjects(),
    clients: localStorage.getClients(),
    logs: localStorage.getLogs(),
    logFilterDuration: 'Day',
    settings: []
}

const store = createStore(
  rootReducer,
  defaultState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
