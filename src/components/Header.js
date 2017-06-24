import React, { PureComponent } from 'react'

export default class Header extends PureComponent {

  showSettingsModal() {
    window.swal({
      title: 'Settings',
      html:
      '<div><label for="dark_mode">Dark mode <input id="dark_mode" type="checkbox"/></label></div>' +
      '<div><label for="alerts">Alerts <input id="alerts" type="checkbox" /></label></div>' +
      '<div><label for="alert_periods">Alert periods (mins)<input id="alert_periods" type="text" /></label></div>' +
      '<div><button>Export JSON</button></div>' +
      '<div><span>Import JSON</span></div>' +
      '<div><input id="import" type="text" /></div>',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function () {
        return new Promise(function (resolve, reject) {
          // Do validation here
          resolve([
            document.getElementById('dark_mode').value,
            document.getElementById('alerts').value,
            document.getElementById('alert_periods').value,
            document.getElementById('import').value
          ])
        })
      },
      allowOutsideClick: false
    }).then(function (result) {
      window.swal(JSON.stringify(result))
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
