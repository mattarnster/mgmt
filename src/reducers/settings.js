import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const settings = (state = [], action) => {
  switch(action.type) {

    case "SAVE_SETTINGS":
      ls.putSettings(action.payload.settings)
      state = action.payload.settings
      return state

    default:
      return state
  }
}

export default settings
