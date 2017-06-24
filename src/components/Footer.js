import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <ul>
          <li><a><i className="icon-user"></i><p>Clients</p></a></li>
          <li className="active"><a><i className="icon-folder"></i><p>Projects</p></a></li>
          <li><span><i className="icon-clock"></i><p>Timer</p></span></li>
          <li><span><i className="icon-clipboard"></i><p>Log</p></span></li>
        </ul>
      </footer>
    )
  }
}
