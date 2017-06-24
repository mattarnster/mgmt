
import clientData from '../mockData/clients.json'

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
    getProjects() {}
    putProject() {}
    deleteProject() {}

    /**
     * Log
     */
    getLogs() {}
    putLog() {}
    deleteLog() {}
}
