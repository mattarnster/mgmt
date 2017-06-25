import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'
import { addClient, editClient } from '../actions/actionCreators'

class Clients extends PureComponent {

  constructor() {
    super()

    this.addClient = this.addClient.bind(this)
    this.edit = this.edit.bind(this)

    document.title = "Clients"
  }

  addClient() {
    var that = this;

    window.swal({
      title: 'Add New Client',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: 'transparent',
      cancelButtonColor: 'transparent',
      showLoaderOnConfirm: false,
      confirmButtonText: '<i class="icon icon-check-circle"></i>',
      cancelButtonText: '<i class="icon icon-times-circle"></i>',
      preConfirm: function (name) {
        return new Promise(function (resolve, reject) {

            if (name === '') {
              reject('Please enter a name')
            } else {
              resolve()
            }
        })
      },
      allowOutsideClick: false
    }).then(function (name) {
      that.props.dispatch(editClient(name))
    })

  }

  edit(clientId) {
    var that = this;

    window.swal({
      title: 'Edit client',
      input: 'text',
      inputValue: this.props.clients[clientId].name,
      showCancelButton: true,
      confirmButtonColor: 'transparent',
      cancelButtonColor: 'transparent',
      showLoaderOnConfirm: false,
      confirmButtonText: '<i class="icon icon-check-circle"></i>',
      cancelButtonText: '<i class="icon icon-times-circle"></i>',
      preConfirm: function (name) {
        return new Promise(function (resolve, reject) {
          if (name === that.props.clients[clientId].name) {
            reject('Enter a different name or click cancel')
          }
          if (name === '') {
            reject('Please enter a name')
          } else {
            resolve()
          }
        })
      },
      allowOutsideClick: false
    }).then(function (name) {
      that.props.dispatch(editClient(clientId, name))
    })
  }

  render() {
    return (
      <section className="card">
        <header>
          <h1>Clients</h1>
          <button onClick={this.addClient} className="icon-plus"></button>
        </header>
        <div className="card-body">

          <List data={ this.props.clients } edit={ this.edit } sPath="/"/>

        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps)(Clients)
