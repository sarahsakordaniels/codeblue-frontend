import React from 'react'
import './Medication.css'

const Medication = (props) => {

  return(
      <div>
        <p>Drug: {props.drug}</p>
        <p>Dose: {props.dose}</p>
        <p>Time Given: {props.time}</p>
      </div>
    )
}


export default Medication
