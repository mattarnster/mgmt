import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { Link } from 'react-router-dom'

import { addTimeToProject, processLog } from '../actions/actionCreators'
import { showReminderNotification } from '../helpers/webNotifications.js'



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

  componentDidMount() {

    this.unblock = this.props.history.block((nextLocation)=>{

      if(!this.state.ticking) {
        return true
      }

      this.pause();

      var whatdo = nextLocation;
      var that = this;

      var alert = window.swal({
        title: 'Wait a Minute!',
        text: "It looks like you're trying to go back. The Timer will need to be paused before you can proceed, are you sure you want to continue?",
        imageUrl: '/warning.png',
        customClass: 'sweet-warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '<i class="icon icon-check-circle"></i>',
        cancelButtonText: '<i class="icon icon-times-circle"></i>'
      });

      alert.then(function(){
        that.props.history.push(whatdo.pathname)

      },function(nope){
        that.play();
      });

      return false;

    })

  }


  componentWillUnmount() {
    this.unblock();
  }



  getTimer(){
    let time = new Date(this.state.roughTime * 1000).toISOString().substr(11, 8)
    document.title = time
    return time
  }

  play(){
    let that = this;
    let startTime = Date.now()
    let ticking = setInterval(function(){

      let time = that.state.roughTime
      time++
      that.setState({
        roughTime:time
      })
      that.props.dispatch(addTimeToProject(that.props.match.params.projectId, that.state.roughTime))

       if(that.props.settings[2] && that.props.settings[1]) {

        let runTime = Math.round((Date.now() - startTime) / 1000) / 60

        if(runTime % that.props.settings[2] === 0) {
          showReminderNotification()
        }
       }



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
    this.props.dispatch(processLog(runTime, this.props.match.params.projectId))

  }


  render() {
    return (
      <section className="card timer">
        <header>
          <h1>{this.props.projects[this.props.match.params.projectId].name}</h1>
          <Link to={ "/" + this.props.match.params.clientId + "/" + this.props.match.params.projectId + "/logs"}>View Log<i className="icon-clipboard"></i></Link>
        </header>
        <div className="card-body">
          <h1 className="timer">{this.getTimer()}</h1>
          <button onClick={!this.state.ticking ? this.play : this.pause} className={!this.state.ticking ? 'icon-play-circle' : 'icon-pause-circle'}></button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    projects: ProjectFilter(state.projects,props.match.params.projectId,'key'),
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Timer)
