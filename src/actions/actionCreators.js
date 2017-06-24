export function addClient(clientName) {
  return {
    type: "ADD_CLIENT",
    payload: {
      clientName
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

