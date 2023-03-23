import {Component} from 'react'
import LoginBtn from '../Login'
import LogoutBtn from '../Login/Logout'
import Message from '../Message'
import './index.css'

const loginBtn = LoginBtn

const logoutBtn = LogoutBtn

loginBtn.addEventListener('click', () => {
  console.log('LoginBtn cliked')
})

class Home extends Component {
  onBtnClick = () => {
    console.log('Button clicked')
  }

  render() {
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="content-container">
            <Message>Welcome User</Message>
            <LoginBtn />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
