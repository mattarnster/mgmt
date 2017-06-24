import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'
import { addClient } from '../actions/actionCreators'

class Clients extends PureComponent {

  constructor() {
    super()
    this.addClient = this.addClient.bind(this)
  }

  addClient() {

    window.swal({
      title: 'Add New Client',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function (name) {
        return new Promise(function (resolve, reject) {
          setTimeout(function() {
            if (name === '') {
              reject('Please enter a name')
            } else {
              resolve()
            }
          }, 2000)
        })
      },
      allowOutsideClick: false
    }).then(function (name) {
      this.props.dispatch(addClient(name))
    })

  }

  render() {
    return (
      <section className="card">
        <header>
          <h1>Clients</h1>
          <button onClick={this.addClient}>+</button>
        </header>
        <div className="card-body">

          <List data={ this.props.clients } />

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
