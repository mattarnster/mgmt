import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import ListItemOps from './ListItemOps'

export default class ListItem extends PureComponent {

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  render() {
    return (
      <div className="card-list-item">
        { this.props.sPath ? <Link to={this.props.sPath + this.props.itemKey}>{this.props.data.name}</Link> :
        <div>{this.props.data.name}</div> }
        { this.props.sPath ? <button className="icon-dots-three-vertical" onClick={ this.showListOps }></button> : <div>{this.props.data.time}</div>}
        { this.props.sPath ? <ListItemOps edit={ (itemKey) => this.props.edit(itemKey) } delete={ (itemKey) => this.props.delete(itemKey) }  itemKey={ this.props.itemKey } /> : null }
      </div>
    )
  }
}

