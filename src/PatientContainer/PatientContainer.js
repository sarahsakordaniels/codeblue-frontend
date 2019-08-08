import React from 'react'
import AddPatientForm from '../AddPatientForm/AddPatientForm'
import CodeContainer from '../CodeContainer/CodeContainer'
import PatientList from '../PatientList/PatientList'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


class PatientContainer extends React.Component{
constructor(props){
  super(props)
}


  render(){

    return(
      <div>
        <Route path="/addpatient" render={(props)=> <AddPatientForm {...props} addPatient={this.props.addPatient} patients={this.props.patients} users={this.props.users}/>} />

      </div>
    )
  }
}


export default PatientContainer
