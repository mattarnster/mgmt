export function addClient(clientName) {
  return {
    type: "ADD_CLIENT",
    payload: {
      clientName
    }
  }
}

export function addProjectInternal(projectName, projectId) {
  return {
    type: "ADD_PROJECT",
    payload: {
      projectName,
      projectId
    }
  }
}

export function addProjectToClient(project, clientId) {
  return {
    type: "ADD_PROJECT_TO_CLIENT",
    payload: {
      clientId,
      project
    }
  }
}

export function addProject(projectName, projectId, clientId) {
  return (dispatch) => {
    let actionResult = dispatch(addProjectInternal(projectName, projectId))
    dispatch(addProjectToClient(actionResult.payload, clientId))
  }
}
