import React, { PureComponent } from 'react'
import List from './List'


export default class Projects extends PureComponent {
  render() {
    return (
      <section className="card">
        <header>
          <h1>Projects</h1>
          <button>+</button>
        </header>
        <div className="card-body">

          // If no projects
          <div className="card-empty">
            Nothing here do something
            <button>Add blabla</button>
          </div>


          // If projects
          <List data={ this.props.projects } />

        </div>
      </section>
    )
  }
}
