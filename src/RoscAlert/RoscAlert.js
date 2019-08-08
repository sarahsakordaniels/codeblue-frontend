import React, {Component} from "react"
import "./RoscAlert.css"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';

const today = new Date()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

class RoscAlert extends Component {
  constructor(props){
    super(props)
    this.state={
      roscTime: time,
      patientStatus: "Alive"
    }
  }
  
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.onClose()
    this.setState({
      roscTime: time
    })
    this.props.addRoscTime(this.state.roscTime)
    this.props.setPatientStatus(this.state.patientStatus)
  }

  handleChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    this.setState({
      roscTime: time
    })
}

  render() {
    if (!this.props.showRoscAlert) {
      return null
    }
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return ReactDOM.createPortal(
      <div class="modal" id="modal">
        <center>
        <h2>Return Of Spontaneous Circulation (ROSC)</h2>
        <div class="content">{this.props.children}
          Begin post-cardiac arrest care.
          <div>
              Time of ROSC: <input name="roscTime" value={time} onChange={this.handleChange}/>
          </div>
        </div>
        <div class="actions">
          <button class="toggle-button" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
        </center>
      </div>,
      document.body
    )
  }
}
RoscAlert.propTypes = {
  onClose: PropTypes.func.isRequired,
  showRoscAlert: PropTypes.bool.isRequired
}

export default RoscAlert
