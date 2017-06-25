import { combineReducers } from 'redux';

import projects from './projects'
import clients from './clients'
import logs from './logs'
import settings from './settings'
import logFilterDuration from './logFilterDuration'
import splash from './splash'

const rootReducer = combineReducers({
  projects,
  clients,
  logs,
  settings,
  logFilterDuration,
  splash
})

export default rootReducer
