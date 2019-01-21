import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import * as actions from '../../actions/user'
import './SignUp.scss'

class SignUp extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  }

  onEmailChange = value => {
    this.setState({
      email: value
    })
  }

  onUserNameChange = value => {
    this.setState({
      username: value
    })
  }

  onPasswordChange = value => {
    this.setState({
      password: value
    })
  }

  // static propTypes = {}

  render() {
    const {toggleDisplay, signUp} = this.props
    const {email, username, password} = this.state
    return (
      <div className="credentials">
        <input onChange={ e => this.onEmailChange(e.target.value)} type="email" placeholder="email adress" />
        <input onChange={ e => this.onUserNameChange(e.target.value)} type="text" placeholder="username" />
        <input onChange={ e => this.onPasswordChange(e.target.value)} type="password" placeholder="password" />
        <button
          onClick={() => {
            signUp({
              email,
              username,
              password
            })
          }}
        >Sign up</button>
        <span>Have an account? <button onClick={() => toggleDisplay()}>login</button></span>
      </div>
    )
  }
}

export default connect(null, actions)(SignUp)
