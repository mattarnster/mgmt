import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
export default class ListItem extends PureComponent {

  render() {
    return (
      <div className="card-list-item">
        <Link to={ window.location.pathname === "/" ? this.props.itemKey : window.location.pathname + "/" + this.props.itemKey}>{this.props.data.name}</Link>
        <button className="icon-dots-three-vertical"></button>
      </div>
    )
  }
}
