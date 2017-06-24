import React, { PureComponent } from 'react'
import ListItem from './ListItem'

export default class List extends PureComponent {

  constructor() {
    super()
    this.renderListItems = this.renderListItems.bind(this)
  }

  renderListItems() {
    return Object.keys(this.props.data).map((key) => {
      return <ListItem  data={this.props.data[key]} key={key} itemKey={key}/>
    })
  }

  render() {
    return (
      <nav className="card-list">
        { this.props.data ? this.renderListItems() : null}
      </nav>
    )
  }
}
