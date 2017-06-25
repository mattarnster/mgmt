import React, { PureComponent } from 'react'

class ListItemOps extends PureComponent {
  render() {
    return(
      <div>
        <ul>
          <li><a onClick={ this.props.edit }>Rename</a></li>
          <li><a onClick={ this.props.delete }>Delete</a></li>
        </ul>
      </div>
    )
  }
}

export default ListItemOps
