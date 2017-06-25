import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ListItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  render() {
    return (
      <div className="card-list-item">
        {this.props.sPath ? <Link to={this.props.sPath + this.props.itemKey}>{this.props.data.name}</Link> :
        <div>{this.props.data.name}</div>}
        {this.props.sPath ? <button className="icon-dots-three-vertical" onClick={ () => this.props.edit(this.props.itemKey) }></button> : <div>{this.props.data.time}</div>}
      </div>
    )
  }
}

