import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrease = () => {
    this.setState(previousState => ({counter: previousState.counter + 1}))
  }

  render() {
    const {counter} = this.state
    return (
      <div className="main-container">
        <div className="text-container">
          <h1>
            The Button has been clicked &nbsp;
            <span className="counter-color">{counter}&nbsp;</span>
            times
          </h1>
          <p>Click the button to increase the count</p>
          <button className="button" type="button" onClick={this.onIncrease}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
