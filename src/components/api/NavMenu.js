import React from 'react'

import './NavMenu.css'

export class NavMenu extends React.Component {
  logOutBtn = () => {
    this.props.handleLogout()
  }

  render() {
    const { username } = this.props
    return (
      <div className="container">
        <div className="row align-items-center justify-content-end  col-10">
          <span>
            Привет, <a className="userBox">{username}</a>
          </span>
          <button className="btn btn-primary" onClick={this.logOutBtn}>
            Выйти
          </button>
        </div>
      </div>
    )
  }
}
