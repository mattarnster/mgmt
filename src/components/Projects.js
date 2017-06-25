import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { addProject, editProject } from '../actions/actionCreators'




class Projects extends PureComponent {

  constructor() {
    super()

    this.addProject = this.addProject.bind(this)
    this.edit = this.edit.bind(this)

    document.title = 'Projects';
  }


  addProject() {
    var that = this;

    window.swal({
      title: 'Add New Project',
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
      let clientId = that.props.match.params.clientId
      that.props.dispatch(addProject(name, clientId))
    })
  }

  edit(projectId) {
    var that = this;

    window.swal({
      title: 'Edit project',
      input: 'text',
      inputValue: this.props.projects[projectId].name,
      showCancelButton: true,
      confirmButtonColor: 'transparent',
      cancelButtonColor: 'transparent',
      showLoaderOnConfirm: false,
      confirmButtonText: '<i class="icon icon-check-circle"></i>',
      cancelButtonText: '<i class="icon icon-times-circle"></i>',
      preConfirm: function (name) {
        return new Promise(function (resolve, reject) {
          if (name === that.props.projects[projectId].name) {
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
      that.props.dispatch(editProject(projectId, name))
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

          <List data={ this.props.projects } edit={ this.edit } sPath={this.props.match.url+"/"}/>

        </div>
      </section>
    )
  }
}
const mapStateToProps = (state,props) => {
  return {
    projects: ProjectFilter(state.projects,props.match.params.clientId,'clientId')
  }
}

export default connect(mapStateToProps)(Projects)

//props.match.params.clientId
