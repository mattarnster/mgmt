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

