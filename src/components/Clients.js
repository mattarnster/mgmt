import React, { PureComponent } from 'react'
import List from './List'

import { connect } from 'react-redux'

class Clients extends PureComponent {

  render() {
    return (
      <section className="card">
        <header>
          <h1>Clients</h1>
          <button>+</button>
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
