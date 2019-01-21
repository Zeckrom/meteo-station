import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Login from './login'
import SignUp from './signUp'
import './Auth.scss'

export default class Auth extends Component {
  state = {
    display: 'login'
  }

  toggleDisplay = () => {
    const display = this.state.display === 'login'? 'signUp': 'login'
    this.setState({
        display
    })
  }

  // static propTypes = {}
  render() {
    const {display} = this.state
    return (
      <div className="auth">
          {
            display === 'login'? <Login toggleDisplay={this.toggleDisplay} /> : <SignUp toggleDisplay={this.toggleDisplay} />
          }
      </div>
    )
  }
}
