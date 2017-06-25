import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const settings = (state = [], action) => {
  switch(action.type) {

    case "SAVE_SETTINGS":
      ls.putSettings(action.payload.settings)
      return action.payload.settings

    default:
      return action.payload.settings
  }
}

export default settings
