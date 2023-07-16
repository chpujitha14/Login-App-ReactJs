// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {message} = this.props
    return (
      <div className="container">
        {message ? (
          <h1 className="count">Welcome User</h1>
        ) : (
          <h1 className="count">Please Login</h1>
        )}
      </div>
    )
  }
}

export default Message
