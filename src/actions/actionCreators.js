export function addClient(clientName) {
  return {
    type: "ADD_CLIENT",
    payload: {
      clientName
    }
  }
}

export function addProject(project) {
  return {
    type: "ADD_PROJECT",
    payload: {
      project
    }
  }
}
