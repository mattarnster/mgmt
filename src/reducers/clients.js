import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const clients = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_CLIENT':
      let newClient = {
        name: action.payload.clientName,
        projects: []
      }
      let id = Date.now()
      let newClients = Object.assign({}, state, { [id]: newClient })
      ls = new localStorageHelper()
      ls.putClients(newClients)
      return newClients

    case 'ADD_PROJECT_TO_CLIENT':
      // Get the current client & projects array
      let clientId = action.payload.clientId
      let client = state[clientId]
      let clientProjects = client.projects
      let newProject = {
        name: action.payload.project.projectName
      }

      let mergedProjects = Object.assign(clientProjects, { [action.payload.project.projectId]: newProject })

      //state[clientId].projects = mergedProjects

      var newState = Object.assign({}, state);

      newState[clientId].projects = mergedProjects



      ls = new localStorageHelper()
      ls.putClients(newState)

      return newState

    default:
      return state
  }
}

export default clients
