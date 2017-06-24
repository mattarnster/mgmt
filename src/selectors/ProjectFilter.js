import { createSelector } from 'reselect'


const projects = (projects) => projects
const clientId = (projects, clientId) => clientId
const filterByField = (projects, clientId, filterByField) => filterByField;

export const ProjectFilter = createSelector(
  [ clientId, projects, filterByField ],
  (clientId, projects, filterByField) => {

    switch (filterByField) {
      case "clientId":
        return Object.assign({}, ...Object.keys(projects).map(k => (
          (projects[k].clientId === clientId ? {[k]: {name:projects[k].name}} : null))
        ));

      case "key":
        return {[clientId]:{totalTime:projects[clientId].totalTime,name:projects[clientId].name}}

      default:
      return null

    }


  }
)
