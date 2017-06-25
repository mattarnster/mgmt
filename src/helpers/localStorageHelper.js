
// import clientData from '../mockData/clients.json'
// import projectData from '../mockData/projects.json'
// import logData from '../mockData/logs.json'

export default class localStorageHelper {
    /**
     * Clients
     * Projects
     * Logs
     */

    init() {
      if (window.localStorage.getItem('clients') === null) {
        window.localStorage.setItem('clients', JSON.stringify({}))
      }
      if (window.localStorage.getItem('projects') === null) {
        window.localStorage.setItem('projects', JSON.stringify({}))
      }
      if (window.localStorage.getItem('logs') === null) {
        window.localStorage.setItem('logs', JSON.stringify({}))
      }
      if (window.localStorage.getItem('settings') === null) {
        window.localStorage.setItem('settings', JSON.stringify([
          false, false, '10', false, false
        ]))
      }
      if (window.localStorage.getItem('splash') === null) {
        window.localStorage.setItem('splash', true)
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
      let newLogs = JSON.stringify(logs)
      window.localStorage.setItem('logs', newLogs)
    }
    deleteLog() {}

    /**
     * Settings
     */

    getSettings() {
      let settings = JSON.parse(window.localStorage.getItem('settings'))
      return settings
    }

    putSettings(settings) {
      let newSettings = JSON.stringify(settings)
      window.localStorage.setItem('settings', newSettings)
    }
}
