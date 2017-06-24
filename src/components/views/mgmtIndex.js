import React, { PureComponent } from 'react'

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
          <Settings />
          <Clients />
          <Projects />
          <Logs />
        <Footer />
      </div>
    )
  }
}
