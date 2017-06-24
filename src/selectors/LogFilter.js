import { createSelector } from 'reselect'

const logs = (state) => state.logs
const projectId = (state, props) => props.match.params.projectId
const duration = (state) => state.logFilterDuration;

export const LogFilter = createSelector(
  [ logs, projectId, duration ],
  (logs, projectId, duration) => {

    return Object.assign({}, ...Object.keys(logs).map(k => (
      (logs[k].projectId === projectId &&
       logs[k].type === duration ? {[k]: {name:logs[k].time}} : null))
    ));
  }
)

