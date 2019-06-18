import React, {Component} from 'react'

class VitalsForm extends Component{
  constructor(props){
    super(props)
    this.state={
       bloodpressure: '',
       pulse: '',
       temperature: '',
       spo2:'',
       patient_id:''
    }
  }

  handleSubmit = (event) =>{
    this.props.addVitals(this.state.bloodpressure, this.state.pulse, this.state.spo2, this.state.temperature)
    //finish this by adding a function on a patient's page!
    event.preventDefault()
    this.setState({
      bloodpressure: '',
      pulse: '',
      temperature: '',
      spo2:'',
      patient_id:''
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render(){

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        Blood Pressure: <input type="text" name="bloodpressure" value={this.state.bloodpressure} onChange={this.handleChange}/> <br />
      Pulse: <input type="text" name="pulse" value={this.state.pulse}onChange={this.handleChange}/><br />
    SpO2: <input type="text" name="spo2" value={this.state.spo2}onChange={this.handleChange}/><br />
  Temperature: <input type="text" name="temperature" value={this.state.tempterature}onChange={this.handleChange}/><br />
        <input type="submit" />
      </form>
      </div>
    )
  }


}


export default VitalsForm
