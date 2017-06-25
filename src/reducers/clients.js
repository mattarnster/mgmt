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

    case 'EDIT_CLIENT':
      // clientId, name
      let existingClient = state[action.payload.clientId]
      existingClient.name = action.payload.name

      let newState = Object.assign({}, state, { [action.payload.clientId]: existingClient })

      ls = new localStorageHelper()
      ls.putClients(newState)

      return newState

    case 'DELETE_CLIENT':
      let newClientState = {...state}
      delete newClientState[action.payload.clientId]

      ls = new localStorageHelper()
      ls.putClients(newClientState)

      return newClientState


    default:
      return state
  }
}

export default clients
