import React, {Component} from "react"
import ReactDOM from 'react-dom';
import "./CodeSwitchAlert.css"
import PropTypes from "prop-types"

class CodeSwitchAlert extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

render() {
    if (!this.props.showCodeSwitchAlert) {
      return null
    }

    return ReactDOM.createPortal(
      <div class="modal" id="modal">
        <center>
        <h2>Switch Compressors!</h2>

        <div class="content">{this.props.children}Change compressor every 2 minutes, or sooner if fatigued.</div>
        <div class="actions">

          <button class="toggle-button" onClick={this.onClose}>
            Got It
          </button>
        </div>
        </center>
      </div>,
      document.body
    )
  }
}
CodeSwitchAlert.propTypes = {
  onClose: PropTypes.func.isRequired,
  showCodeSwitchAlert: PropTypes.bool.isRequired,
}

export default CodeSwitchAlert
