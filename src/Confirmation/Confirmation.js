import React, {Component} from "react"
import "./Confirmation.css"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';
import Medication from '../Medication/Medication'
import Shock from '../Shock/Shock'
import Rhythm from '../Rhythm/Rhythm'


class Confirmation extends Component {
  constructor(props){
    super(props)
    this.state=({
    })
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
    this.setState({

    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({

    })
    this.props.editCode()

    this.onClose()
    }

  render() {

    const medList = this.props.meds.map((med) => {
      return <Medication key={med.id} {...med} />
    })

    const shockList = this.props.shocks.map((shock) => {
      return <Shock key={shock.id} {...shock} />
    })

    const rhythmList = this.props.rhythms.map((rhythm) => {
      return <Rhythm key={rhythm.id} {...rhythm} />
    })

    const patientProfile = this.props.patients.filter((e) => {
      return e.id === this.props.patientId
    })
    const patientName = patientProfile.map((e) => {
      return e.name
    })

    if (!this.props.showConfirmation) {
      return null
    }

    return ReactDOM.createPortal(
      <div class="modal" id="modal">
        <center>
        <h2>Confirm Data</h2>

          <div class="content">
            <center>
              <u><h3>Patient</h3></u>{patientName}<br/>
              <u><h3>Medications</h3></u>{medList}<br/>
              <u><h3>Shocks</h3></u>{shockList}<br/>
              <u><h3>Rhythms</h3></u>{rhythmList}<br/>
            </center>
          </div>

          <div class="actions">
            <button class="toggle-button" onClick={this.handleSubmit}>
            Submit
            </button>

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
Confirmation.propTypes = {
  onClose: PropTypes.func.isRequired,
  showConfirmation: PropTypes.bool.isRequired
}

export default Confirmation
