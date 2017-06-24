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
      <section className="card logs">
        <header>
          <h1>Logs</h1>
          <nav>
            <button className={ this.props.logFilterDuration === 'Day' ? 'active' : '' } onClick={ () => this.setFilter('Day') }>Day</button>
            <button className={ this.props.logFilterDuration === 'Week' ? 'active' : '' } onClick={ () => this.setFilter('Week') }>Week</button>
            <button className={ this.props.logFilterDuration === 'Month' ? 'active' : '' } onClick={ () => this.setFilter('Month') }>Month</button>
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
    logs: LogFilter(state, props),
    logFilterDuration: state.logFilterDuration
  }
}

export default connect(mapStateToProps)(Logs)
