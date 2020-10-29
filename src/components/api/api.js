import React from 'react'
import { Link } from 'react-router-dom'

import './api.css'

export class Api extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eValue: '',
      pValue: '',
    }
  }
  render() {
    return (
      <div>
        <h1>Главная</h1>
        <button className="btn btn-primary">Разлогиниться</button>
      </div>
    )
  }
}
