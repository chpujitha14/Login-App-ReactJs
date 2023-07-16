// Write your code here
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const {login} = this.props
    return <button onClick={login}>Login</button>
  }
}

export default Login
