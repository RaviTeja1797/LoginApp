import './index.css'
import {Component} from 'react'

class EvenOdd extends Component {
  state = {count: 0, evenOddText: 'Even'}

  generateRandomNumberAndUpdateState = () => {
    const RandomNumber = Math.ceil(Math.random() * 100)
    if (RandomNumber % 2 === 0) {
      this.setState({count: RandomNumber, evenOddText: 'Even'})
    } else {
      this.setState({count: RandomNumber, evenOddText: 'Odd'})
    }
  }

  render() {
    const {count, evenOddText} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="content-container">
            <h1>
              Count <span>{count}</span>
            </h1>
            <p>Count is {evenOddText}</p>
            <button
              type="button"
              onClick={this.generateRandomNumberAndUpdateState}
            >
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOdd
