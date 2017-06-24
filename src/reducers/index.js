import { combineReducers } from 'redux';

import projects from './projects'
import clients from './clients'
import logs from './logs'
import settings from './settings'
import logFilterDuration from './logFilterDuration'

const rootReducer = combineReducers({
  projects,
  clients,
  logs,
  settings,
  logFilterDuration
})

export default rootReducer
