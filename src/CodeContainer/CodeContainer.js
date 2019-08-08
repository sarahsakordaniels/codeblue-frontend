import React, {Component} from 'react'
import Timer from "../Timer/Timer"
import Modal from '@material-ui/core/Modal';

class CodeContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      shocks: [],
      meds: [],
      rhythms: [],
      codes:[],
      maxId:'',
      allCodes:[],
      patientName: ''
    }
  }

getCodes = () =>{
  fetch('http://localhost:3000/codes')
      .then(response => response.json())
      .then(allCodes => this.setState({allCodes}))
}

 findMaxId = () => {
   let maxId = 0;
   this.state.allCodes.forEach(code => {
     if (code.id > maxId) {
       maxId = code.id;
     }
   })
   this.setState({
     maxId:maxId
   })
 }

 addPatientName = (name) => {
 this.setState({
  patientName: name
 })
}

  addShock = (shockTime, shockEnergy, code_id) => {
    const {shocks} = this.state
    const newShock = {shockTime, shockEnergy, code_id: this.state.maxId}
    const shockList = [...shocks, newShock]
    this.setState({
      shocks: shockList
    })
    const body = {time:shockTime, energy:shockEnergy, code_id:this.state.maxId}
    fetch('http://localhost:3000/shocks', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
}

  addMed = (drug, dose, time, code_id) => {
    const {meds} = this.state
    const newMed = {drug, dose, time, code_id:this.state.maxId}
    const medList = [...meds, newMed]
    this.setState({
      meds: medList
    })
    const body = {drug:drug, dose:dose, time:time, code_id:this.state.maxId}
    fetch('http://localhost:3000/codemedications', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
  }

  addCode = (beginTime, patient_id) => {
    const newCode = {beginTime, patient_id}
    const codeList = [...this.state.codes, newCode]
    this.setState({
      codes: codeList
    })
    const body = {begin_time:beginTime, patient_id:patient_id}
    fetch('http://localhost:3000/codes', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
  }

  addRhythm = (pulse, rhythm, time, code_id) => {
    const {rhythms} = this.state
    const newRhythm = {pulse, rhythm, time, code_id:this.state.maxId}
    const rhythmList = [...rhythms, newRhythm]
    this.setState({
      rhythms: rhythmList
    })
    const body = {pulse:pulse, rhythm_type:rhythm, time:time, code_id:this.state.maxId}
    fetch('http://localhost:3000/rhythms', {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })
      .catch(error => (console.error(error.message)))
  }

  render = () => {
    return(
      <div>
         <Timer
           getCodes={this.getCodes} findMaxId={this.findMaxId}
           shocks={this.state.shocks} rhythms={this.state.rhythms}
           meds={this.state.meds} codes={this.state.codes} patients={this.props.patients}
           addCode={this.addCode} addShock={this.addShock} addEndTime={this.addEndTime}
           addMed={this.addMed} addRhythm={this.addRhythm} addPatientStatus={this.addPatientStatus}
           addPatientName={this.addPatientName} maxId={this.state.maxId}
           />
       </div>
    )
  }
}

export default CodeContainer
