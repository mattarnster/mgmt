import React, { PureComponent } from 'react'

export default class NoData extends PureComponent {
  render() {
    return(
      <div className="no-data">
        <p>Hey!</p>
        <p>{ this.props.displayText }</p>
        <i className="icon icon-plus-circle" onClick={ this.props.add }></i>
      </div>
    )
  }
}
