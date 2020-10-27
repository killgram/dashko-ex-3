import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export class Register extends React.Component {
  render() {
    return (
      <div className="col-md-offset-3 col-md-4 mx-auto">
        <form className="form-horizontal">
          <span className="heading">РЕГИСТРАЦИЯ</span>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="login"
              placeholder="Логин"
            ></input>
          </div>
          <div className="form-group help">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Пароль"
            ></input>
          </div>
          <div className="form-group help">
            <input
              type="password"
              className="form-control"
              id="passwordAgain"
              placeholder="Повторите пароль"
            ></input>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary">
              РЕГИСТРАЦИЯ
            </button>
            <button type="button" className="btn btn-primary" id="hasLogin">
              <Link to="/">back</Link>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
