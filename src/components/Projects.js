import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { addProject } from '../actions/actionCreators'




class Projects extends PureComponent {

  constructor() {
    super()

    this.addProject = this.addProject.bind(this)
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

  render() {
    return (
      <section className="card">
        <header>
          <h1>Projects</h1>
          <button onClick={ this.addProject }>+</button>
        </header>
        <div className="card-body">

          <List data={ this.props.projects } sPath={this.props.match.url+"/"}/>

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
