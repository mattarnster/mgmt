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
  return (dispatch) => {
    dispatch(deleteClientInternal(clientId))
    dispatch(deleteAllProjectsWithClient(clientId))
  }
}

export function deleteClientInternal(clientId) {
  return {
    type: "DELETE_CLIENT",
    payload: {
      clientId
    }
  }
}

export function deleteAllProjectsWithClient(clientId) {
  console.log('test')
  return {
    type: "DELETE_ALL_PROJECTS_WITH_CLIENT",
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

export function deleteProject(projectId) {
  return {
    type: "DELETE_PROJECT",
    payload: {
      projectId
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
