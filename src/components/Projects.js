import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'

import { addProject } from '../actions/actionCreators'

class Projects extends PureComponent {

  constructor() {
    super()

    this.addProject = this.addProject.bind(this)
  }

  shouldComponentUpdate() {
    return true
  }

  addProject() {
    var that = this;

    window.swal({
      title: 'Add New Project',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
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
      let id = Date.now()
      let clientId = that.props.match.params.clientId
      that.props.dispatch(addProject(name, id, clientId))
    })
  }

  render() {
    return (
      <section className="card">
        <header>
          <h1>Projects</h1>
          <button onClick={ this.addProject }>+</button>
        </header>
        <div className="card-body">

          <List data={ this.props.projects } />

        </div>
      </section>
    )
  }
}
const mapStateToProps = (state,props) => {
  return {
    projects: state.clients[props.match.params.clientId].projects
  }
}

export default connect(mapStateToProps)(Projects)
