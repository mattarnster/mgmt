import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Clients from '../Clients'
import Footer from '../Footer'
import Header from '../Header'
import Logs from '../Logs'
import Projects from '../Projects'
import Settings from '../Settings'
import Timer from '../Timer'

export default class mgmtIndex extends PureComponent {
  render() {
    return (
      <div>
        <Header />
          <Router>
            <div>
              <Route path={ this.props.match.url} component={Clients} />
              <Route path={ this.props.match.url + ':clientId' } component={Projects} />
              <Route path={ this.props.match.url + ':clientId/:projectId' } component={Timer} />
              <Route path={ this.props.match.url + ':clientId/:projectId/logs' } component={Logs} />
            </div>
          </Router>
          <Settings />
        <Footer />
      </div>
    )
  }
}
