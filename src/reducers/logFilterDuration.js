const logFilterDuration = (state = '', action) => {
  switch(action.type) {
    case "SWITCH_LOG_FILTER_DURATION":
      return action.payload.duration

    default:
      return state
  }
}

export default logFilterDuration
