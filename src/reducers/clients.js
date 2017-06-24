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

    default:
      return state
  }
}

export default clients
