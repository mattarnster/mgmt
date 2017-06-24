import localStorageHelper from '../helpers/localStorageHelper'

const clients = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_CLIENT':
      console.log(state)
      console.log(action)
      let newClient = {
        name: action.payload.clientName,
        projects: []
      }
      let id = Date.now()
      let newClients = Object.assign({}, state, { [id]: newClient })
      let ls = new localStorageHelper()
      ls.putClients(newClients)
      return newClients

    default:
      return state
  }
}

export default clients
