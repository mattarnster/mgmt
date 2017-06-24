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
      let newProject = {
        name: action.payload.project.projectName
      }


      //ls = new localStorageHelper()
      //ls.putClients(newState)

      return state

    default:
      return state
  }
}

export default clients
