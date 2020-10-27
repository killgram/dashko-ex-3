import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export class Login extends React.Component {
  render() {
    return (
      <div className="col-md-offset-3 col-md-4 mx-auto">
        <form className="form-horizontal">
          <span className="heading">АВТОРИЗАЦИЯ</span>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="loginInput"
              placeholder="E-MAIL"
            ></input>
          </div>
          <div className="form-group help">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="PASSWORD"
            ></input>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.handleLogin}
            >
              ВХОД
            </button>
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                РЕГИСТРАЦИЯ
              </button>
            </Link>
          </div>
        </form>
      </div>
    )
  }
}
