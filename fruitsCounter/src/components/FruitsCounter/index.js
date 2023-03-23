// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(previousState => ({mango: previousState.mango + 1}))
  }

  onBanana = () => {
    this.setState(previousState => ({banana: previousState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">
            Bob ate <span className="count-color">{mango}</span> mangoes&nbsp;
            <span className="count-color">{banana}</span>&nbsp;bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
