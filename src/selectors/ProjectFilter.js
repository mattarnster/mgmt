import { createSelector } from 'reselect'


const getVisibilityFilter = (state, props) => props.match.params.clientId
const getProjects = (state, props) => state.projects

export const ProjectFilter = createSelector(
  [ getVisibilityFilter, getProjects ],
  (visibilityFilter, projects) => {

    var reProjects = Object.keys(projects).filter(s => projects[s].clientId === visibilityFilter)
    var ret = {};
    reProjects.forEach(function(k,i){
      ret[k] = {
        name: projects[k].name
      }
    });

    return ret
  }
)
