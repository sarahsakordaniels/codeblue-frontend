import React from 'react'
import './Medication.css'

const Medication = (props) => {

  return(
      <div>
        <b>Drug: </b>{props.drug}<br/>
        <b>Dose: </b>{props.dose}<br/>
        <b>Time Given: </b>{props.time}<br/>
        _____
      </div>
    )
}


export default Medication
