import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eValue: '',
      pValue: '',
    }
  }

  inputEmail = (e) => {
    this.setState({
      eValue: e.currentTarget.value,
    })
  }
  inputPassword = (e) => {
    this.setState({
      pValue: e.currentTarget.value,
    })
  }
  regClick = () => {
    this.props.createUser(this.state.eValue, this.state.pValue)
  }
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
              placeholder="E-MAIL"
              onChange={this.inputEmail}
            ></input>
          </div>
          <div className="form-group help">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="PASSWORD"
              onChange={this.inputPassword}
            ></input>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.regClick}
            >
              Зарегистрировать
            </button>
            <Link to="/">
              <button type="button" className="btn btn-primary" id="hasLogin">
                back
              </button>
            </Link>
          </div>
        </form>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}
