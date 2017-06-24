import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ProjectFilter } from '../selectors/ProjectFilter'

import { addProject } from '../actions/actionCreators'


class Timer extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <section className="card">
        <header>
          <h1>.</h1>
        </header>
        <div className="card-body">
          <button></button>
          <button>Logs</button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    projects: ProjectFilter(state.projects,props.match.params.projectId,'key')
  }
}

export default connect(mapStateToProps)(Timer)
