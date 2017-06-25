import { generateExists } from '../helpers/generateExists'
import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const logs = (state = {}, action) => {
  switch(action.type) {

    case "PROCESS_LOG":
      let exists = generateExists(action.payload.type)
      let filteredByAll = Object.keys(state).filter((l) => state[l].projectId === action.payload.projectId &&
                                                                 state[l].type === action.payload.type     &&
                                                                 state[l].exists === exists
                                                                 ? true : false)

      if (filteredByAll.length === 1) {

        let timeLog = state[filteredByAll[0]]
        timeLog.time = timeLog.time + action.payload.runTime

        let newState = Object.assign({}, state, {[filteredByAll[0]]: timeLog})

        ls.putLogs(newState)

        return newState
      }

      // One doesn't exist for this period, create it.
      let newId = Date.now() + action.payload.type[0]
      let newTimeLog = {
        projectId: action.payload.projectId,
        time: action.payload.runTime,
        type: action.payload.type,
        exists
      }


      let newState = Object.assign({}, state, {[newId]: newTimeLog})

      ls.putLogs(newState)

      return newState

      case "DELETE_LOGS_WITH_PROJECT":

        var newLogsWithoutProject = Object.assign({}, ...Object.keys(state).map(k => (
          (state[k].projectId === action.payload.projectId ? null : {[k]: state[k]}))
        ));
        ls.putLogs(newLogsWithoutProject)

        return newLogsWithoutProject


    default:
      return state
  }
}

export default logs
