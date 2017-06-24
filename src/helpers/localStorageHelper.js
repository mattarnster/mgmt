
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
        console.log('got here 1')
        window.localStorage.setItem('clients', JSON.stringify(clientData))
      }
      if (window.localStorage.getItem('projects') === null) {
        console.log('got here 2')
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
    putClients(clients) {
      let newClients = JSON.stringify(clients)
      window.localStorage.setItem('clients', newClients)
    }

    deleteClient() {}

    /**
     * Projects
     */
    getProjects() {
      let projects = JSON.parse(window.localStorage.getItem('projects'))
      return projects
    }
    putProjects(projects) {
      let newProjects = JSON.stringify(projects)
      window.localStorage.setItem('projects', newProjects)
    }
    deleteProject() {}

    /**
     * Log
     */
    getLogs() {}
    putLog() {}
    deleteLog() {}
}
