import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import List from './List'

import { LogFilter } from '../selectors/LogFilter'
import { changeLogFilterDuration } from '../actions/actionCreators'

class Logs extends PureComponent {

  constructor() {
    super()

    this.setFilter = this.setFilter.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(changeLogFilterDuration('Day'))
  }

  setFilter(duration) {
    this.props.dispatch(changeLogFilterDuration(duration))
  }

  render() {

    return (
      <section className="card">
        <header>
          <h1>Logs</h1>
          <nav>
            <button onClick={ () => this.setFilter('Day') }>Day</button>
            <button onClick={ () => this.setFilter('Week') }>Week</button>
            <button onClick={ () => this.setFilter('Month') }>Month</button>
          </nav>
        </header>
        <div className="card-body">

          <List data={ this.props.logs }/>

        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    logs: LogFilter(state, props)
  }
}

export default connect(mapStateToProps)(Logs)
