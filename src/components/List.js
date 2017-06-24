import React, { PureComponent } from 'react'
import ListItem from './ListItem'

export default class List extends PureComponent {

  constructor() {
    super()
    this.renderListItems = this.renderListItems.bind(this)
  }

  renderListItems() {
    return Object.keys(this.props.data).map((key) => {
      return <ListItem  data={this.props.data[key]} key={key} itemKey={key} sPath={this.props.sPath ? this.props.sPath : false}/>
    })
  }
  noData() {
    return(
      <div className="no-data">
      <i>nope</i>
      <p>No data yet</p>
      <p><button>Add</button></p>
      </div>
    )
  }

  render() {
    return (
      <nav className="card-list">
        { this.props.data ? this.renderListItems() : this.noData()}
      </nav>
    )
  }
}
