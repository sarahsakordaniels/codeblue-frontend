import React, {Component} from "react"
// import "./ShockRecorded.css"



class ShockRecorded extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }
  render() {
    if (!this.props.showShockRecorded) {
      return null
    }
    return(
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
      </div>
    )
  }
}

export default ShockRecorded
