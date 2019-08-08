import React from 'react'
import './Shock.css'

const Shock = (props) => {

  return(
      <div>
        <b>Energy:</b> {props.shockEnergy} joules <br/>
        <b>Time of Shock:</b> {props.shockTime} <br/>
        _____
      </div>
    )
}


export default Shock
