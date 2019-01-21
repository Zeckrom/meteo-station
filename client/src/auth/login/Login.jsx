import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import * as actions from '../../actions/user'
import './Login.scss'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  // static propTypes = {}

  render() {
    console.log(this.props)
    const {login, toggleDisplay} = this.props
    return (
      <div className="credentials">
        <input type="email" placeholder="email adress" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <span>don't have an account? <button onClick={() => toggleDisplay()}>join</button></span>
      </div>
    )
  }
}


export default connect(null, actions)(Login)
