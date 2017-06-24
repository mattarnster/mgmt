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
          <li disabled={ projectsActiveState ? false : true }><Link to={ "/" + this.props.match.params[0].split("/")[1] }><i className="icon-folder"></i><p>Projects</p></Link></li>
          <li disabled={ timerActiveState ? false : true }><Link to={ this.props.match.params[0].split("/")[1] + "/" + this.props.match.params[0].split("/")[2]}><i className="icon-clock"></i><p>Timer</p></Link></li>
          <li disabled={ timerActiveState ? false : true }><Link to={ this.props.match.url + "/logs" }><i className="icon-clipboard"></i><p>Log</p></Link></li>
        </ul>
      </footer>
    )
  }
}
