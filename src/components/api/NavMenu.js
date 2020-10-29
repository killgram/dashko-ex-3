import React from 'react'
import { Link } from 'react-router-dom'

import './NavMenu.css'

export class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eValue: '',
      pValue: '',
    }
  }
  logOutBtn = () => {
    this.props.handleLogout()
  }
  render() {
    return (
      <div className="container">
        <h1>Главная</h1>
        <button className="btn btn-primary" onClick={this.logOutBtn}>
          Разлогиниться
        </button>
      </div>
    )
  }
}
