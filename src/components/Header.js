import React, { PureComponent } from 'react'

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="logo-container">
          <span className="icon-clock"></span>
          <span className="logo-letter one">M</span>
          <span className="logo-letter two">G</span>
          <span className="logo-letter three">M</span>
          <span className="logo-letter four">T</span>
        </div>
        <div className="search-container">
          <form action="">
            <input type="text" id="searchInput" placeholder="Search..."/>
            <button type="button" className="icon-search"></button>
          </form>
        </div>
        <div className="settings-container">
          <span className="icon-cog"></span>
        </div>
      </header>
    )
  }
}
