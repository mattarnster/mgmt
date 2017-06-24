const clients = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_CLIENT':
      console.log(state)
      console.log(action)
      let newClient = {
        name: action.payload.clientName
      }
      let id = new Date('now')
      return Object.assign({}, state, { [id]: newClient })

    default:
      return state
  }
}

export default clients
