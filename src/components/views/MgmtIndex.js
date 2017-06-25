import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Clients from '../Clients'
import Footer from '../Footer'
import Header from '../Header'
import Logs from '../Logs'
import Projects from '../Projects'
import Timer from '../Timer'

export default class MgmtIndex extends PureComponent {
  render() {
    return (
      <div>
        <Header />
          <Router>
            <div>
              <div className="main-panel">
                <Route path="/" component={Clients} />
                <Route path="/:clientId"  component={Projects} />
                <Route path="/:clientId/:projectId"  component={Timer} />
                <Route path="/:clientId/:projectId/logs"  component={Logs} />
              </div>
              <Route path="*" component={Footer} />
            </div>
          </Router>
      </div>
    )
  }
}
