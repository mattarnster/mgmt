import { combineReducers } from 'redux';

import projects from './projects'
import clients from './clients'
import logs from './logs'
import settings from './settings'

const rootReducer = combineReducers({
  projects,
  clients,
  logs,
  settings
})

export default rootReducer
