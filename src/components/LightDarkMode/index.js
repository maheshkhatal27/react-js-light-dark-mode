import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {defaultMode: true}

  getModeLightDarkMode = () => {
    const {defaultMode} = this.state
    return defaultMode ? 'dark-mode-container' : 'light-mode-container'
  }

  getButtonMode = () => {
    const {defaultMode} = this.state
    return defaultMode ? 'light-button' : 'dark-button'
  }

  getButtonText = () => {
    const {defaultMode} = this.state
    return defaultMode ? 'Light Mode' : 'Dark Mode'
  }

  changeDefaultMode = () => {
    this.setState(prevState => ({defaultMode: !prevState.defaultMode}))
  }

  render() {
    const getModeClass = this.getModeLightDarkMode()
    const getButtonMode = this.getButtonMode()
    const BtnText = this.getButtonText()

    return (
      <div className="main-bg-container">
        <div className={`${getModeClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className={`${getButtonMode}`}
            type="button"
            onClick={this.changeDefaultMode}
          >
            {`${BtnText}`}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
