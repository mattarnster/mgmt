import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { addProject } from '../actions/actionCreators'


class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: props.projects[props.match.params.projectId].totalTime,
      ticking: false
    }

    this.getTimer = this.getTimer.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);

  }

  getTimer(){
    let time = new Date(this.state.time * 1000).toISOString().substr(11, 8);
    document.title = time;
    return time;
  }

  play(){
      let that = this;
      let ticking = setInterval(function(){

        let time = that.state.time;
        time++;
        that.setState({
          time:time
        })

      },1000);

      this.setState({
        ticking:ticking
      })
  }

  pause(){

    let ticking = this.state.ticking;
    clearInterval(ticking);
    this.setState({
      ticking:false
    });

  }


  render() {
    return (
      <section className="card">
        <header>
          <h1>{this.getTimer()}</h1>
        </header>
        <div className="card-body">
          <button onClick={!this.state.ticking ? this.play : this.pause}></button>
          <button>Logs</button>
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
