import { createSelector } from 'reselect'


const Filter = (state, props) => props
const Projects = (state, props) => state
const vFilter = (state, props, filter) => filter;

export const ProjectFilter = createSelector(
  [ Filter, Projects,vFilter ],
  (Filter, Projects,vFilter) => {
    switch (vFilter) {

      case "clientId":

        return Object.assign({}, ...Object.keys(Projects).map(k => (
          (Projects[k].clientId === Filter ? {[k]: {name:Projects[k].name}} : null))
        ));

      case "key":

        return {[Filter]:{totalTime:Projects[Filter].totalTime}}

      return null

    }


  }
)
