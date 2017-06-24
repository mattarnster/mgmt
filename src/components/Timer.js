import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { Link } from 'react-router-dom'

import { addTimeToProject, processLog } from '../actions/actionCreators'


class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      roughTime: props.projects[props.match.params.projectId].totalTime,
      time: props.projects[props.match.params.projectId].totalTime,
      ticking: false
    }

    this.getTimer = this.getTimer.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)

  }

  getTimer(){
    let time = new Date(this.state.roughTime * 1000).toISOString().substr(11, 8)
    document.title = time
    return time
  }

  play(){
      let that = this;
      let ticking = setInterval(function(){

        let time = that.state.roughTime
        time++
        that.setState({
          roughTime:time
        })

      },1000);


      this.setState({
        ticking:ticking,
        startTime:  Date.now()
      })
  }

  pause(){

    let ticking = this.state.ticking
    clearInterval(ticking)

    // fix issue with inctive tabs being throttled
    let startTime = this.state.startTime;
    let endTime = Date.now();

    let runTime = Math.round((endTime - startTime) / 1000)

    let finalTime = this.state.time + runTime

    this.setState({
      ticking: false,
      roughTime: finalTime,
      time: finalTime
    })

    this.props.dispatch(addTimeToProject(this.props.match.params.projectId, finalTime))
    this.props.dispatch(processLog(finalTime, this.props.match.params.projectId))
  }


  render() {
    return (
      <section className="card timer">
        <header>
          <h1>Current Session</h1>
          <Link to={ "/" + this.props.match.params.clientId + "/" + this.props.match.params.projectId + "/logs"}>View Log<i className="icon-clipboard"></i></Link>
        </header>
        <div className="card-body">
          <h1 className="timer">{this.getTimer()}</h1>
          <button onClick={!this.state.ticking ? this.play : this.pause} className={!this.state.ticking ? 'icon-play' : 'icon-pause'}></button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    projects: ProjectFilter(state.projects,props.match.params.projectId,'key')
  }
}

export default connect(mapStateToProps)(Timer)
