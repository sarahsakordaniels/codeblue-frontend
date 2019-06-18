import React from 'react'
// import './Patient.css'

const Patient = (props) => {


  return(
      <div>
        {props.name}<br />
        {props.age}<br />
        {props.history}<br /><br />
      </div>
    )
}


export default Patient
