import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { dismissSplash } from '../actions/actionCreators'

class Splash extends PureComponent {

  constructor() {
    super()

    this.dismissSplash = this.dismissSplash.bind(this)
  }

  componentDidMount() {
    var that = this
    document.body.classList.add("splash-visible")
    setTimeout(function() {
      that.props.dispatch(dismissSplash())
      document.body.classList.remove("splash-visible")
    }, 2000)
  }

  dismissSplash() {
    this.props.dispatch(dismissSplash())
  }

  render() {
    return (
      <div onClick={this.dismissSplash}>
        <h1>MGMT</h1>
        <p>This is the splash-screen.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    splash: state.splash
  }
}

export default connect(mapStateToProps)(Splash)
