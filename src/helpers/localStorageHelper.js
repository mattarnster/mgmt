
import clientData from '../mockData/clients.json'
import projectData from '../mockData/projects.json'

export default class localStorageHelper {
    /**
     * Clients
     * Projects
     * Logs
     */

    init() {
      if (window.localStorage.getItem('clients') === null) {
        window.localStorage.setItem('clients', JSON.stringify(clientData))
      }
      if (window.localStorage.getItem('projects') === null) {
        window.localStorage.setItem('projects', JSON.stringify(projectData))
      }
    }


    /**
     * Clients
     */
    getClients() {
      let clients = JSON.parse(window.localStorage.getItem('clients'))
      return clients
    }
    putClient() {}
    deleteClient() {}

    /**
     * Projects
     */
    getProjects() {
      let projects = JSON.parse(window.localStorage.getItem('projects'))
      return projects
    }
    putProject() {}
    deleteProject() {}

    /**
     * Log
     */
    getLogs() {}
    putLog() {}
    deleteLog() {}
}
