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

