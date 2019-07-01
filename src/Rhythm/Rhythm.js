import React from 'react'
import './Rhythm.css'

const Rhythm = (props) => {


  return(
      <div>
        <p>Pulse Present: {props.pulse.toString()}</p>
        <p>Heart Rhythm: {props.rhythm}</p>
        <p>Time Recorded: {props.time}</p>
      </div>
    )
}


export default Rhythm
