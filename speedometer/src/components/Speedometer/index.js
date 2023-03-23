import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onBreak = () => {
    const {speed} = this.state
    if (speed >= 10) {
      this.setState(previousState => ({speed: previousState.speed - 10}))
    }
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(previousState => ({speed: previousState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1>Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              onClick={this.onAccelerate}
              type="button"
              className="button accelerate"
            >
              Accelerate
            </button>
            <button
              onClick={this.onBreak}
              type="button"
              className="button break"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
