const clients = (state = {}, action) => {
  switch(action.type) {

    case 'ADD_CLIENT':
      console.log(state)
      console.log(action)
      return state

    default:
      return state
  }
}

export default clients
