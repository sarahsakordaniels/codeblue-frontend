import React, {Component} from "react"
import "./CodeMedForm.css"
import PropTypes from "prop-types"
import ReactDOM from 'react-dom';


class CodeMedForm extends Component {
  constructor(props){
    super(props)
    this.state={
      drug:'',
      dose:'',
      time:'',
      showEpiDose: false,
      showAmioDose: false,
      showLidoDose: false,
      patientWeight: 0,
      showLidoCalculatedDose: false,
      showPatientWeight: false,
      showOtherDoseForm: false
    }
  }

  onClose = (event) => {
    this.props.onClose && this.props.onClose(event)
    this.setState({
      drug:'',
      dose:'',
      time:'',
      showEpiDose: false,
      showAmioDose: false,
      showLidoDose: false,
      patientWeight: 0,
      showLidoCalculatedDose: false,
      showPatientWeight: false,
      showOtherDoseForm: false
    })
  }

  handleDrugFormChange = (event) =>{
    const { value } = event.target
      if (value === "Epinephrine"){
        this.setState({
          drug: "Epinephrine",
          dose:'',
          showEpiDose: true,
          showAmioDose: false,
          showLidoDose: false,
          patientWeight: 0,
          showLidoCalculatedDose: false,
          showPatientWeight: false,
          showOtherDoseForm: false
        })
      }
      if (value === "Amiodarone"){
        this.setState({
          drug: "Amiodarone",
          dose:'',
          showEpiDose: false,
          showAmioDose: true,
          showLidoDose: false,
          patientWeight: 0,
          showLidoCalculatedDose: false,
          showPatientWeight: false,
          showOtherDoseForm: false
        })
      }
      if (value === "Lidocaine"){
        this.setState({
          drug: "Lidocaine",
          dose:'',
          showEpiDose: false,
          showAmioDose: false,
          showLidoDose: true,
          patientWeight: 0,
          showLidoCalculatedDose: false,
          showPatientWeight: false,
          showOtherDoseForm: false
        })
      }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMed(this.state.drug, this.state.dose, this.state.time)
    this.setState({
      drug:'',
      dose:'',
      time:'',
      showEpiDose: false,
      showAmioDose: false,
      showLidoDose: false,
      patientWeight: 0,
      showLidoCalculatedDose: false,
      showPatientWeight: false,
      showOtherDoseForm: false
    })
    this.onClose()
  }

  handleDoseChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const {name, value} = event.target
    this.setState({
      [name]: value,
      time: time,
    })
  }

  handleEpiDoseChange = (event) =>{
    this.setState({
      dose: (event.target.value)
    })
  }

  handleLidoDoseChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const {name, value} = event.target
    this.setState({
      [name]: value,
      time: time,
      showPatientWeight: true
    })
  }

  setPatientWeight = (event) =>{
    this.setState({
      patientWeight: event.target.value
    })
  }

  calculateLidoDose = (event) => {
    event.preventDefault()
    if (this.state.dose === "1.0mg/kg"){
          this.setState({
            dose:(this.state.patientWeight * 1.0+"mg"),
            showLidoCalculatedDose: true
            })
          }
    if (this.state.dose === "1.5mg/kg"){
        this.setState({
          dose:(this.state.patientWeight * 1.5+"mg"),
          showLidoCalculatedDose: true
        })
      }
    if (this.state.dose === "0.5mg/kg"){
        this.setState({
          dose:(this.state.patientWeight * 0.5+"mg"),
          showLidoCalculatedDose: true
        })
      }
    if (this.state.dose === "0.75mg/kg"){
        this.setState({
          dose: (this.state.patientWeight * 0.75+"mg"),
          showLidoCalculatedDose: true
        })
      }
    }

    openOtherDoseForm = (event) => {
      event.preventDefault()
      this.setState({
        showOtherDoseForm: !this.state.showOtherDoseForm
      })
    }

  render = () => {
    if (!this.props.showCodeMedForm) {
      return null
    }

    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return ReactDOM.createPortal(
      <div class="modal" id="modal" >
        <center>
        <h2>Record Medication</h2>
        <div class="content">
          <form onSubmit={this.handleSubmit}>

            Drug: <select name="drug" value={this.state.drug} onChange={this.handleDrugFormChange}>
                    <option value="">Select A Drug</option>
                    <option value="Epinephrine" >Epinephrine</option>
                    <option value="Amiodarone">Amiodarone</option>
                    <option value="Lidocaine">Lidocaine</option>
                  </select><br/><br/>




            <div class="epinephrine-dose" style={{ display: this.state.showEpiDose ? "block" : "none" }}>
              Dose: <select name="dose" value={this.state.dose} onChange={this.handleDoseChange}>
                      <option value="">Select Epinephrine Dose</option>
                      <option value="0.5mg">0.5 mg</option>
                      <option value="1mg">1 mg</option>
                    </select>
                    <br/><br/>
                    Administration Time: <input name="time" value={time} />
                  <br/><br/>
                    <div>
                      <div style={{display: this.state.showOtherDoseForm ? "block" : "none" }}>
                        <input type="text" value={this.state.dose} name="dose" placeholder="Enter Dose in Milligrams" onChange={this.handleDoseChange} />
                      </div>
                      {this.state.showOtherDoseForm === false && (<button onClick={this.openOtherDoseForm}>Record Other Dosage</button>)}
                      {this.state.showOtherDoseForm === true && (<button onClick={this.openOtherDoseForm}>Close</button>)}
                    </div>

            </div>

            <div class="amiodarone-dose" style={{ display: this.state.showAmioDose ? "block" : "none" }}>
              Dose: <select name="dose" value={this.state.dose} onChange={this.handleDoseChange}>
                      <option value="">Select Amiodarone Dose</option>
                      <option value="300mg">First Dose - 300 mg Bolus</option>
                      <option value="150mg">Second Dose - 150 mg Bolus</option>
                    </select>
                    <br/><br/>
                      Administration Time: <input name="time" value={time} />
                    <br/><br/>
                    <div>
                      <div>
                        <div style={{display: this.state.showOtherDoseForm ? "block" : "none" }}>
                          <input type="text" value={this.state.dose} name="dose" placeholder="Enter Dose in Milligrams" onChange={this.handleDoseChange} />
                        </div>
                        {this.state.showOtherDoseForm === false && (<button onClick={this.openOtherDoseForm}>Record Other Dosage</button>)}
                        {this.state.showOtherDoseForm === true && (<button onClick={this.openOtherDoseForm}>Close</button>)}
                      </div>
                    </div>
            </div>

            <div class="lidocaine-dose" style={{ display: this.state.showLidoDose ? "block" : "none" }}>
              Dose: <select name="dose" value={this.state.dose} onChange={this.handleLidoDoseChange}>
                      <option value="">Select Lidocaine Dose</option>
                      <option value="1.0mg/kg">First Dose - 1 mg/kg</option>
                      <option value="1.5mg/kg">First Dose - 1.5 mg/kg</option>
                      <option value="0.5mg/kg">Second Dose - 0.5 mg/kg</option>
                      <option value="0.75mg/kg">Second Dose - 0.75 mg/kg</option>
                    </select>
                    <br /><br/>
                <div style={{display: this.state.showPatientWeight ? "block" : "none" }}>Patient Weight (kg):<input type="number" placeholder="Enter in Kilograms" name="weight" onChange={this.setPatientWeight}/>
                <button onClick={this.calculateLidoDose}>Calculate Dose</button></div>
                <br/><br/>
                <div style={{display: this.state.showLidoCalculatedDose ? "block" : "none" }}>Administer {this.state.dose}</div>
                  <br/><br/>
                  Administration Time: <input name="time" value={time} />
                <br/>
                <br/>
                  <div>
                    <div>
                      <div style={{display: this.state.showOtherDoseForm ? "block" : "none" }}>
                        <input type="text" value={this.state.dose} name="dose" placeholder="Enter Dose in Milligrams" onChange={this.handleDoseChange} />
                      </div>
                      {this.state.showOtherDoseForm === false && (<button onClick={this.openOtherDoseForm}>Record Other Dosage</button>)}
                      {this.state.showOtherDoseForm === true && (<button onClick={this.openOtherDoseForm}>Close</button>)}
                    </div>
                  </div>
          </div>
        </form>

        </div>

        <div class="actions">
          <button class="toggle-button" onClick={this.handleSubmit}>
            Submit
          </button>
          <button class="toggle-button" onClick={this.onClose}>
            Cancel
          </button>
        </div>
        </center>
      </div>,
      document.body
    )
  }
}

CodeMedForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  showCodeMedForm: PropTypes.bool.isRequired
}

export default CodeMedForm
