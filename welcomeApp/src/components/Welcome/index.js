import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isButtonClicked: false}

  whenBtnClicked = () => {
    const {isButtonClicked} = this.state
    if (isButtonClicked) {
      this.setState({isButtonClicked: false})
    } else {
      this.setState({isButtonClicked: true})
    }
  }

  render() {
    const {isButtonClicked} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="welcome">Welcome</h1>
          <p className="thank-you">Thank you! Happy Learning</p>
          <button
            type="button"
            onClick={this.whenBtnClicked}
            className="button"
          >
            {isButtonClicked === true ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
