import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    styleName: 'sub-container dark-mode-subcontainer',
    mode: 'dark',
    btnTxt: 'Light Mode',
  }

  onBtnClick = () => {
    const {mode} = this.state

    if (mode === 'dark') {
      this.setState({
        styleName: 'sub-container light-mode-subcontainer',
        mode: 'light',
        btnTxt: 'Dark Mode',
      })
    } else if (mode === 'light') {
      this.setState({
        styleName: 'sub-container dark-mode-subcontainer',
        mode: 'dark',
        btnTxt: 'Light Mode',
      })
    }
  }

  render() {
    const {styleName, btnTxt} = this.state
    return (
      <div className="main-container">
        <div className={styleName}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.onBtnClick}>
            {btnTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
