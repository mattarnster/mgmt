import { createSelector } from 'reselect'

const logs = (state) => state.logs
const projectId = (state, props) => props.match.params.projectId
const duration = (state) => state.logFilterDuration;

const getName = (logId,duration) =>{

  logId = logId.replace(/[^0-9]/g, '')
  let date = new Date(parseFloat(logId))

  switch(duration){
    case "Day":
      return date.toLocaleDateString('en-GB',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})

    case "Week":
      var  day = date.getDay(),
      diff = date.getDate() - day + (day === 0 ? -6:1),
      diffo = date.getDate() - day + (day === 6 ? 6:0)
      return new Date(date.setDate(diff)).toLocaleDateString('en-GB',{day: 'numeric', month: 'short'})+"  --  "+ new Date(date.setDate(diffo)).toLocaleDateString('en-GB',{day: 'numeric', month: 'short'})+" "+date.getFullYear()

    default:
      return date.toLocaleDateString('en-GB',{ year: 'numeric', month: 'long'})
  }

}

const getTime = (time) =>{
  return new Date(time * 1000).toISOString().substr(11, 8)
}



export const LogFilter = createSelector(
  [ logs, projectId, duration ],
  (logs, projectId, duration) => {

    return Object.assign({}, ...Object.keys(logs).map(k => (

      (logs[k].projectId === projectId &&
       logs[k].type === duration ? {[k]: {name:getName(k,duration),time:getTime(logs[k].time)}} : null))

    ));

  }
)
