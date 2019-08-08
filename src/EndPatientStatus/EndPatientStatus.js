import React, {Component} from "react"
import ReactDOM from 'react-dom';
import "./EndPatientStatus.css"
import PropTypes from "prop-types"

class EndPatientStatus extends Component {
  constructor(props){
    super(props)
    this.state={
      patientStatus: '',
      endTime: '',
      patient_id: '',
      beginTime: this.props.beginTime,
      showRoscTime: false,
      showTimeOfDeath: false
    }
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e)
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.onClose()
    this.setState({
      patientStatus: '',
      endTime: '',
      patient_id: '',
      beginTime: this.props.beginTime,
      showRoscTime: false,
      showTimeOfDeath: false
    })

    this.props.showConfirmation()
    this.props.findMaxId()
  }

  handleChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    if(event.target.value === "Dead"){
    this.setState({
      patientStatus: event.target.value,
      endTime: time,
      showTimeOfDeath: true,
      showRoscTime: false
    })
    this.props.setPatientStatus(event.target.value)
  }
    if(event.target.value === "Alive"){
    this.setState({
      patientStatus: event.target.value,
      endTime: time,
      showTimeOfDeath: false,
      showRoscTime: true

    })
    this.props.setPatientStatus(event.target.value)
  }
}

handlePatientChange = (event) => {
  this.setState({
    [event.target.name]:parseInt(event.target.value)
  })
}

render() {
    if (!this.props.showEndPatientStatus) {
      return null
    }
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return ReactDOM.createPortal(

      <div class="modal" id="modal">

        <center>
        <h2>Patient Status</h2>

        <div class="content">

        <form onSubmit={this.handleSubmit}>

          <select onChange={this.handleChange}>
            <option name="patientStatus" value="">Select Status</option>
            <option name="patientStatus" value="Alive">Alive</option>
            <option name="patientStatus" value="Dead">Dead</option>
          </select>
        </form>
          <div style={{ display: this.state.showTimeOfDeath ? "block" : "none" }}>
              Time of Death: <input name="endTime" value={time} onChange={this.handleChange}/>
          </div>
          <div style={{ display: this.state.showRoscTime ? "block" : "none" }}>
              Time of ROSC: <input name="endTime" value={time} onChange={this.handleChange}/>
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
EndPatientStatus.propTypes = {
  onClose: PropTypes.func.isRequired,
  showEndPatientStatus: PropTypes.bool.isRequired,
}

export default EndPatientStatus
