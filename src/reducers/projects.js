import localStorageHelper from '../helpers/localStorageHelper'

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

      let ls = new localStorageHelper()
      ls.putProjects(newProjects)
      return newProjects

    default:
      return state
  }
}

export default projects
