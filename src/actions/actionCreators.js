export function addClient(client) {
  return {
    type: "ADD_CLIENT",
    payload: {
      client
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
