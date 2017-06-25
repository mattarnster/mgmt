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
    }, 2500)
  }

  dismissSplash() {
    document.body.classList.remove("splash-visible")
    this.props.dispatch(dismissSplash())
  }

  render() {
    return (
      <div onClick={this.dismissSplash} className="splash-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width='25' id='clock'>
        <g id='min' >
          <path d="M502.4 1C227.5-1.2 3.2 221.7.4 500.2.8 775.3 220.8 999.7 498.6 1001c274.7 1.2 500.5-219 501.8-498 1.3-274.5-218.8-499.7-498-502zm-2.2 909.1C273.4 909 90.7 726 91.6 500.8c.7-227.4 183.9-409.4 411.3-408.6 225.1.6 407.9 185.5 406.6 411.4-1.2 224.7-185.5 407.7-409.3 406.5z"/>
          <path d="M501.6 183.3h-.1c-24.9 0-45.2 20.2-45.2 45.1l-.5 272.5c0 25 20.1 45.3 45.2 45.3 24.9 0 45.2-20.2 45.2-45.1l.5-272.5c.1-25-20.1-45.3-45.1-45.3z"/>
        </g>
        <g id='hour' >
          <path d="M853 854.5c-199 194.9-515.1 194-708-2-195.7-199-192.2-513.9 2.9-707.1 198.2-196.3 513.6-192.3 707 2.7 195.5 197.4 192.3 511.6-1.9 706.4zm-64-64.9c159.8-158.7 160-417.3.5-578.4-157.5-159-417.2-160-577-1.9C51.9 368 50.4 628 209.1 787.6c160.4 161.4 418.6 162.2 579.9 2z"/>
          <path d="M531.5 273.5c8.2 8.2 13.3 19.5 13.3 31.9v193.8c0 25-20.2 45.2-45.1 45.1-25 0-45.2-20.2-45.1-45.1V305.4c0-25 20.2-45.2 45.1-45.1 12.4-.1 23.6 5 31.8 13.2z"/>
        </g>
      </svg>
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
