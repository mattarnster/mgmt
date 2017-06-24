import React, { PureComponent } from 'react'

import { Provider } from 'react-redux';
import store from '../store'


import MgmtIndex from './views/MgmtIndex'

import '../assets/styles/main.css'

export default class AppMain extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <p>test</p>
        <MgmtIndex />
      </Provider>
    )
  }
}
