import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'

class Projects extends PureComponent {

  render() {
    return (
      <section className="card">
        <header>
          <h1>Projects</h1>
          <button>+</button>
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
