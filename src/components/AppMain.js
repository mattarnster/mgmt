import React, { PureComponent } from 'react'

import { Provider } from 'react-redux';
import store from '../store'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import mgmtIndex from './views/mgmtIndex'

export default class AppMain extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Route path="/" exact component={ mgmtIndex } />
          </div>
        </Router>
      </Provider>
    )
  }
}
