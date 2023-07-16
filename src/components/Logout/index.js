// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Logout extends Component {
  render() {
    const {logout} = this.props
    return <button onClick={logout}>Logout</button>
  }
}

export default Logout
