import localStorageHelper from '../helpers/localStorageHelper'

var ls = new localStorageHelper()

const splash = (state = false, action) => {
  switch(action.type) {
    case "DISMISS_SPLASH":
      state = false
      return state

    default:
      return state
  }
}

export default splash
