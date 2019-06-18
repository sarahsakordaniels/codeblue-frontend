import React, {Component} from "react"
// import "./EndCode.css"

class EndCode extends Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }


  handleEnd = (event) =>{
    event.preventDefault()
    this.props.stopTimer()
    this.onClose()
    this.props.showEndPatientStatus()
  }

  render() {
      if (!this.props.showEndCode) {
        return null
      }
      console.log(this.props.endTime)


      return(
        <div class="modal" id="modal">
          <center>
          <h2>End Code</h2>
          <div class="content">{this.props.children}Are you sure you want to end this code?</div>
          <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              Continue Code
            </button>
            <button class="toggle-button" onClick={this.handleEnd}>
              End Code
            </button>
          </div>
          </center>
        </div>
            )
    }
  }

export default EndCode
