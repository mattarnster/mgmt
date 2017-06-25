export function addClient(clientName) {
  return {
    type: "ADD_CLIENT",
    payload: {
      clientName
    }
  }
}

export function editClient(clientId, name) {
  return {
    type: "EDIT_CLIENT",
    payload: {
      clientId,
      name
    }
  }
}

export function deleteClient(clientId) {
  return {
    type: "DELETE_CLIENT",
    payload: {
      clientId
    }
  }
}

export function addProject(projectName, clientId) {
  return {
    type: "ADD_PROJECT",
    payload: {
      projectName,
      clientId
    }
  }
}

export function editProject(projectId, name) {
  return {
    type: "EDIT_PROJECT",
    payload: {
      projectId,
      name
    }
  }
}

export function addTimeToProject(projectId, totalTime) {
  return {
    type: "ADD_TIME_TO_PROJECT",
    payload: {
      projectId,
      totalTime
    }
  }
}

export function processLogInternal(type, runTime, projectId) {
  return {
    type: "PROCESS_LOG",
    payload: {
      type,
      runTime,
      projectId
    }
  }
}

export function processLog(runTime, projectId) {
  return (dispatch) => {
    dispatch(processLogInternal('Month', runTime, projectId))
    dispatch(processLogInternal('Week', runTime, projectId))
    dispatch(processLogInternal('Day', runTime, projectId))
  }
}

export function changeLogFilterDuration(duration) {
  return {
    type: "SWITCH_LOG_FILTER_DURATION",
    payload: {
      duration
    }
  }
}

export function saveSettings(settings) {
  console.log(settings)
  return {
    type: "SAVE_SETTINGS",
    payload: {
      settings
    }
  }
}

export function dismissSplash() {
  return {
    type: "DISMISS_SPLASH"
  }
}
