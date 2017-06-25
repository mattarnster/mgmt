import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { saveSettings } from '../actions/actionCreators'

class Header extends PureComponent {

  constructor() {
    super()

    this.showSettingsModal = this.showSettingsModal.bind(this)
  }

  componentDidMount() {
    if (this.props.settings[0] === 'on') {
      document.body.className += ' ' + 'dark-mode'
    }
  }

  showSettingsModal() {
    var that = this
    let dm_status = this.props.settings[0]
    let al_status = this.props.settings[1]
    let alp_status = this.props.settings[2]

    console.log(dm_status)

    window.swal({
      title: 'Settings',
      html:
      '<div><label for="dark_mode">Dark mode <input id="dark_mode" type="checkbox" ' + (dm_status === true ? 'checked' : '') + '></label></div>' +
      '<div><label for="alerts">Alerts <input id="alerts" type="checkbox" ' + (al_status === true ? 'checked' : '' ) + '/></label></div>' +
      '<div><label for="alert_periods">Alert periods (mins)<input id="alert_periods" type="text" value="' + alp_status + '" /></label></div>' +
      '<div><button>Export JSON</button></div>' +
      '<div><span>Import JSON</span></div>' +
      '<div><input id="import" type="text" /></div>',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function () {
        return new Promise(function (resolve, reject) {
          // Do validation here
          if (document.getElementById('alerts').value === 'on' && document.getElementById('alert_periods').value === '') {
            reject("You need to specify an alert period.")
          }
          resolve([
            document.getElementById('dark_mode').checked,
            document.getElementById('alerts').checked,
            document.getElementById('alert_periods').value,
            document.getElementById('import').value
          ])
        })
      },
      allowOutsideClick: false
    }).then(function (result) {
      //window.swal(JSON.stringify(result))
      console.log(result)
      that.props.dispatch(saveSettings(result))
    }).catch(window.swal.noop)
  }

  render() {
    return (
      <header className="header">
      <div className="logo-container">
          <span className="icon-clock"></span>
          <span className="logo-letter one">M</span>
          <span className="logo-letter two">G</span>
          <span className="logo-letter three">M</span>
          <span className="logo-letter four">T</span>
        </div>
        <div className="settings-container">
          <span className="icon-cog" onClick={ this.showSettingsModal }></span>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(Header)
