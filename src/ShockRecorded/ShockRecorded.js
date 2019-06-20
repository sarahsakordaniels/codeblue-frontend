import React, {Component} from "react"
import "./ShockRecorded.css"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';


class ShockRecorded extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }
  render() {
    if (!this.props.showShockRecorded) {
      return null
    }
    return ReactDOM.createPortal(
      <div class="modal" id="modal">
        <center>
        <h2>Shock Recorded</h2>
        <div class="content">{this.props.children}Continue compressions.</div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
        </center>
      </div>,
      document.body
    )
  }
}
ShockRecorded.propTypes = {
  onClose: PropTypes.func.isRequired,
  showShockRecorded: PropTypes.bool.isRequired
}

export default ShockRecorded
