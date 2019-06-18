import React from 'react'
import Patient from '../Patient/Patient'

const PatientList = (props) => {
  const patientList = props.patients.map((patient) => {
    return <Patient key={patient.id} {...patient} />
  })

  return(
    <div class='container'>
      {patientList}
    </div>
  )
}
export default PatientList
