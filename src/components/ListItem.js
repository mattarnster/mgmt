import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ListItemOps from './ListItemOps'

export default class ListItem extends Component {

  constructor() {
    super()

    this.state = {
      listItemOps: false
    }

    this.showListOps = this.showListOps.bind(this)
  }

  showListOps() {
    this.setState({
      listItemOps: !this.state.listItemOps
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  render() {
    return (
      <div className="card-list-item">
        {this.props.sPath ? <Link to={this.props.sPath + this.props.itemKey}>{this.props.data.name}</Link> :
        <div>{this.props.data.name}</div>}
        {this.props.sPath ? <button className="icon-dots-three-vertical" onClick={ this.showListOps }></button> : <div>{this.props.data.time}</div>}
        { this.state.listItemOps ? <ListItemOps edit={ this.props.edit } delete={ this.props.delete } /> : null }
      </div>
    )
  }
}

