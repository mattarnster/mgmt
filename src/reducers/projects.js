import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const projects = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_PROJECT':
      let newProject = {
        name: action.payload.projectName,
        clientId: action.payload.clientId,
        logs: [],
        totalTime: 0
      }

      let projectId = Date.now()
      let newProjects = Object.assign({}, state, { [projectId]: newProject })

      ls.putProjects(newProjects)
      return newProjects

    case 'ADD_TIME_TO_PROJECT':
      let currentProject = state[action.payload.projectId]
      currentProject.totalTime = action.payload.totalTime
      let newState = Object.assign({}, state, {[action.payload.projectId]: currentProject})


      ls = new localStorageHelper()
      ls.putProjects(newState)

      return newState

    default:
      return state
  }
}

export default projects
