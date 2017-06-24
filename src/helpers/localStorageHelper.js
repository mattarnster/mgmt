
import clientData from '../mockData/clients.json'
import projectData from '../mockData/projects.json'
import logData from '../mockData/logs.json'

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
      if (window.localStorage.getItem('logs') === null) {
        window.localStorage.setItem('logs', JSON.stringify(logData))
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
    getLogs() {
      let logs = JSON.parse(window.localStorage.getItem('logs'))
      return logs
    }
    putLogs(logs) {
      console.log(logs)
      let newLogs = JSON.stringify(logs)
      window.localStorage.setItem('logs', newLogs)
    }
    deleteLog() {}
}
