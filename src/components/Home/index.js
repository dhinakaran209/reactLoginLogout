import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedOn: false}

  change = () => {
    this.setState(prevState => ({isLoggedOn: !prevState.isLoggedOn}))
  }

  render() {
    const {isLoggedOn} = this.state
    return (
      <div className="bg-container">
        <Message isLoggedOn={isLoggedOn} />
        {isLoggedOn ? (
          <Logout logout={this.change} />
        ) : (
          <Login login={this.change} />
        )}
      </div>
    )
  }
}

export default Home
