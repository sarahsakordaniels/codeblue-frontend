import React from 'react'
import './Shock.css'

const Shock = (props) => {

  return(
      <div>
        <p>Energy:{props.shockEnergy} joules</p>
        <p>Time of Shock:{props.shockTime}</p>
      </div>
    )
}


export default Shock
