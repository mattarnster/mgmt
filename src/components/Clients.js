import React, { PureComponent } from 'react'
import List from './List'
import NoData from './NoData'

import { connect } from 'react-redux'
import { addClient, editClient, deleteClient } from '../actions/actionCreators'

class Clients extends PureComponent {

  constructor() {
    super()

    this.addClient = this.addClient.bind(this)
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
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
      that.props.dispatch(addClient(name))
    })

  }

  edit(clientId) {
    var that = this;

    window.swal({
      title: 'Rename client',
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

  delete(clientId) {
    var that = this

    window.swal({
      title: 'Delete Client',
      'text': 'Are you sure? All projects for this client will be deleted too (this cannot be undone).',
      showCancelButton: true,
      confirmButtonColor: 'transparent',
      cancelButtonColor: 'transparent',
      showLoaderOnConfirm: false,
      confirmButtonText: '<i class="icon icon-check-circle"></i>',
      cancelButtonText: '<i class="icon icon-times-circle"></i>',
      allowOutsideClick: false
    }).then(function () {
      that.props.dispatch(deleteClient(clientId))
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

          {Object.keys(this.props.clients).length > 0 ? <List data={ this.props.clients } edit={ (itemKey) => this.edit(itemKey) } delete={ (itemKey) => this.delete(itemKey) } sPath="/"/> : <NoData displayText="You don't seem to have any clients. Why not add one?" add={ this.addClient } /> }

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
