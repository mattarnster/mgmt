import { createSelector } from 'reselect'


const getVisibilityFilter = (state, props) => props.match.params.clientId
const getProjects = (state, props) => state.projects

export const ProjectFilter = createSelector(
  [ getVisibilityFilter, getProjects ],
  (visibilityFilter, projects) => {

    let reProjects = Object.assign({}, ...Object.keys(projects).map(k => (
      (projects[k].clientId === visibilityFilter ? {[k]: {name:projects[k].name}} : null))
    ));

    return reProjects
  }
)
