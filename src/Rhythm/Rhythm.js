import React from 'react'
import './Rhythm.css'

const Rhythm = (props) => {


  return(
      <div>
        <b>Pulse Present:</b> {props.pulse.toString()}<br/>
        <b>Heart Rhythm:</b> {props.rhythm}<br/>
        <b>Time Recorded:</b> {props.time}<br/>
        _____
      </div>
    )
}


export default Rhythm
