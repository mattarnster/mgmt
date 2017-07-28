import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends PureComponent {
  render() {


    let params = this.props.match.params[0].split("/")

    return (
      <footer className="footer">
        <ul>
          <li><Link to="/"><i className="icon-user"></i><p>Clients</p></Link></li>
          <li>
            {params[1] ? <Link to={ "/" + params[1] }><i className="icon-folder"></i>Projects</Link> : <span><i className="icon-folder"></i>Projects</span>}
          </li>
          <li>
            {params[1] && params[2] ? <Link to={"/"+params[1]+"/"+params[2] }><i className="icon-clock"></i>Timer</Link> : <span><i className="icon-clock"></i>Timer</span>}
          </li>
          <li>
            {params[1] && params[2] ? <Link to={"/"+params[1]+"/"+params[2]+"/logs" }><i className="icon-clipboard"></i>Logs</Link> : <span><i className="icon-clipboard"></i>Logs</span>}
          </li>
        </ul>
      </footer>
    )
  }
}
