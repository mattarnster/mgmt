import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { dismissSplash } from '../actions/actionCreators'

import SplashLogo from '../assets/images/splash-logo.svg'

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
    }, 2500)
  }

  dismissSplash() {
    document.body.classList.remove("splash-visible")
    this.props.dispatch(dismissSplash())
  }

  render() {
    return (
      <div onClick={this.dismissSplash} className="splash-container">
        <img src={SplashLogo} alt="Splash Logo"/>
        <h3><span>M</span><span>G</span><span>M</span><span>T</span></h3>
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
