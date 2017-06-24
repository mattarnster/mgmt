import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends PureComponent {
  render() {
    console.log(this.props.match.params[0].split("/"))
    let projectsActiveState = (this.props.match.params[0].split("/")[1] ? true : false)
    let timerActiveState = (this.props.match.params[0].split("/")[2] ? true : false)
    let logActiveState = (this.props.match.params[0].split("/")[3] ? true : false)
    return (
      <footer className="footer">
        <ul>
          <li><a><i className="icon-user"></i><p>Clients</p></a></li>
          <li disabled={ projectsActiveState ? false : true }><a><i className="icon-folder"></i><p>Projects</p></a></li>
          <li disabled={ timerActiveState ? false : true }><span><i className="icon-clock"></i><p>Timer</p></span></li>
          <li disabled={ logActiveState ? false : true }><span><i className="icon-clipboard"></i><p>Log</p></span></li>
        </ul>
      </footer>
    )
  }
}
