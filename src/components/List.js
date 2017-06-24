import React, { PureComponent } from 'react'

export default class List extends PureComponent {

  constructor() {
    super()

    this.renderListItems = this.renderListItems.bind(this)
  }

  renderListItems() {
    data.forEach((data) => {
      return <ListItem data={data} />
    })
  }

  render() {
    return (
      <nav className="card-list">
         { this.renderListItems() }
      </nav>
    )
  }
}
