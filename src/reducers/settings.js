const settings = (state = [], action) => {
  switch(action.type) {

    case "SAVE_SETTINGS":
      return action.payload.settings

    default:
      return state
  }
}

export default settings
