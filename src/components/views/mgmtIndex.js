import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Clients from '../Clients'
import Footer from '../Footer'
import Header from '../Header'
import Logs from '../Logs'
import Projects from '../Projects'
import Settings from '../Settings'
import Timer from '../Timer'

export default class MgmtIndex extends PureComponent {
  render() {
    return (
      <div>
        <Header />
          <Router>
            <div className="main-panel">
              <Route path="/" component={Clients} />
              <Route path="/:clientId"  component={Projects} />
              <Route path="/:clientId/:projectId"  component={Timer} />
              <Route path="/:clientId/:projectId/logs"  component={Logs} />
            </div>
          </Router>
          <Settings />
        <Footer />
      </div>
    )
  }
}
