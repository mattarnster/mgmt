import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'
import { addClient } from '../actions/actionCreators'

class Clients extends PureComponent {

  constructor() {
    super()
    this.addClient = this.addClient.bind(this)
    document.title = "Clients"
  }

  addClient() {
    var that = this;

    window.swal({
      title: 'Add New Client',
      text:'Name your client',
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

  render() {
    return (
      <section className="card">
        <header>
          <h1>Clients</h1>
          <button onClick={this.addClient} className="icon-plus"></button>
        </header>
        <div className="card-body">

          <List data={ this.props.clients }  sPath="/"/>

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
