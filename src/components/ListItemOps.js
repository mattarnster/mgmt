import React, { PureComponent } from 'react'

class ListItemOps extends PureComponent {

  constructor() {
    super()

    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
  }

  edit() {
    this.props.edit(this.props.itemKey)
  }

  delete() {
    this.props.delete(this.props.itemKey)
  }

  render() {
    return(
      <div className="item-menu">
        <ul>
          <li><a onClick={ this.edit }>Rename</a></li>
          <li><a onClick={ this.delete }>Delete</a></li>
        </ul>
      </div>
    )
  }
}

export default ListItemOps
