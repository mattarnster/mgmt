import localStorageHelper from '../helpers/localStorageHelper'

const projects = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_PROJECT':
      let newProject = {
        name: action.payload.projectName,
        logs: [],
        totalTime: 0
      }
      let newProjects = Object.assign({}, state, { [action.payload.projectId]: newProject })
      let ls = new localStorageHelper()
      ls.putProjects(newProjects)
      return newProjects

    default:
      return state
  }
}

export default projects
