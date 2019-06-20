
import React, {Component} from 'react'
import CodeSwitchAlert from '../CodeSwitchAlert/CodeSwitchAlert'
import RhythmCheckForm from '../RhythmCheckForm/RhythmCheckForm'
import CodeShockForm from '../CodeShockForm/CodeShockForm'
import CodeMedForm from '../CodeMedForm/CodeMedForm'
import ShockRecorded from '../ShockRecorded/ShockRecorded'
import RoscAlert from '../RoscAlert/RoscAlert'
import Metronome from '../Metronome/Metronome'
import EndCode from '../EndCode/EndCode'
import EndPatientStatus from '../EndPatientStatus/EndPatientStatus'
import Confirmation from '../Confirmation/Confirmation'
// import './Timer.css'

const today = new Date()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

class Timer extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    showCodeSwitchAlert: false,
    showRhythmCheckForm: false,
    showCodeShockForm: false,
    showCodeMedForm: false,
    showShockRecorded: false,
    showRoscAlert: false,
    showMetronome: false,
    showEndCode: false,
    showConfirmation: false,
    showEndPatientStatus: false,
    showSignUp: false,
    endTime: '',
    beginTime: time,
    patientId: '',
    patientStatus: '',
    // roscTime: ''

  }

   addRoscTime = roscTime => {
   const newRoscTime = {roscTime}
   this.setState({
     endTime: newRoscTime
   })
  }

  setPatientStatus = (patientStatus) => {
    this.setState({
      patientStatus:patientStatus
    })
  }

  showShockRecorded = e => {
    this.setState({
      showShockRecorded: !this.state.showShockRecorded
    })
  }

  showConfirmation = e => {
    this.setState({
      showConfirmation: !this.state.showConfirmation
    })
  }

  showEndPatientStatus = e => {
    this.setState({
      showEndPatientStatus: !this.state.showEndPatientStatus
    })
  }

  showEndCode = e => {
    const today = new Date()
    const endTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    this.setState({
      showEndCode: !this.state.showEndCode,
      endTime: endTime
    })
  }

  addBeginTime= beginTime => {
  const newBeginTime = {beginTime, id: Date.now()}
  this.setState({
    beginTime: newBeginTime
  })
}

  showMetronome = e => {
    this.setState({
      showMetronome: !this.state.showMetronome
    })
  }

  showRoscAlert = e => {
    this.setState({
      showRoscAlert: !this.state.showRoscAlert
    })
  }

  showCodeSwitchAlert = e => {
    this.setState({
      showCodeSwitchAlert: !this.state.showCodeSwitchAlert
    })
  }

  showRhythmCheckForm = e => {
    this.setState({
      showRhythmCheckForm: !this.state.showRhythmCheckForm
    })
  }

  toggleRhythmCheckForm = e => {
    this.setState({
      showRhythmCheckForm: !this.state.showRhythmCheckForm
    })
  }

  showCodeShockForm = e => {
    this.setState({
      showCodeShockForm: !this.state.showCodeShockForm
    })
  }
  showCodeMedForm = e => {
    this.setState({
      showCodeMedForm: !this.state.showCodeMedForm
    })
  }

  startTimerInitial = () => {
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    this.addBeginTime(this.state.beginTime)
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
      beginTime: time
    })
    this.props.addCode(this.state.beginTime, this.state.patientId)
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      })
    }, 10)
    setTimeout(() => this.props.findMaxId(), 5000 );
    setTimeout(() => this.props.getCodes(), 2000 );
    // setTimeout(() => this.setState({showCodeSwitchAlert: true}), 15000);
    // setTimeout(() => this.setState({showCodeSwitchAlert: true}), 10000);
    // setTimeout(() => this.setState({showRhythmCheckForm: true}), 10);
    // setTimeout(() => this.setState({showCodeShockForm: true}), 10000);
    // setTimeout(() => this.setState({showCodeMedForm: true}), 5000);
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    })
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      })
    }, 10)
  }

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    })
  }

  handlePatientChange = (event) => {
    this.setState({
      patientId:parseInt(event.target.value)
    })
  }

  editCode = (endTime, patientStatus) => {
    const body = {end_time:this.state.endTime, patient_status:this.state.patientStatus}
            fetch(`http://localhost:3000/codes/${this.props.maxId}`, {
                method: 'PATCH',
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify(body)
              })
            }

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (

      <div>
        <br/><br/>

          <center><select class="select-css" name="patient_id" type="number" value={this.props.patient_id} onChange={this.handlePatientChange}>
            <option>Select Patient</option>
            {this.props.patients.map((e)=> {
              return <option value={e.id}>{e.name}</option>
            })}
          </select>
          </center>
<br/>
        <center>
        <div>
          {hours} : {minutes} : {seconds} : {centiseconds}
        </div>

        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimerInitial}>Begin Code</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
       </center>
      <br/>
      <br/>
      <br/>

<div>
          <center>
                <button class="butn" onClick={this.showCodeShockForm}>Record Shock</button>
                <button class="butn" onClick={this.showRhythmCheckForm}>Record Rhythm</button>
                <button class="butn" onClick={this.showCodeMedForm}>Record Medication</button>
                <button class="butn" onClick={this.showMetronome}>Metronome</button>
                <button class="butn" onClick={this.showEndCode}>End Code</button>

            </center>
</div>
      <Confirmation patientId={this.state.patientId} shocks={this.props.shocks} patients={this.props.patients}
        rhythms={this.props.rhythms} meds={this.props.meds} codes={this.props.codes}
        onClose={this.showConfirmation} showConfirmation={this.state.showConfirmation} editCode={this.editCode}/>

      <EndCode maxId={this.props.maxId} beginTime={this.state.beginTime} showEndPatientStatus={this.showEndPatientStatus}
        stopTimer={this.stopTimer} endTime={this.state.endTime} addEndTime={this.props.addEndTime}
        onClose={this.showEndCode} showEndCode={this.state.showEndCode}
        patientId={this.state.patientId} shocks={this.props.shocks} patients={this.props.patients}
          rhythms={this.props.rhythms} meds={this.props.meds} codes={this.props.codes}
          showConfirmation={this.state.showConfirmation} onConfirmationClose={this.showConfirmation}/>

      <EndPatientStatus maxId={this.props.maxId} findMaxId={this.props.findMaxId} showConfirmation={this.showConfirmation}
        patients={this.props.patients}  addCode={this.props.addCode} beginTime={this.state.beginTime}
        addEndTime={this.props.addEndTime} addPatientStatus={this.props.addPatientStatus}
        addTimeOfDeath={this.props.addTimeOfDeath} addRoscTime={this.addRoscTime} onClose={this.showEndPatientStatus}
        showEndPatientStatus={this.state.showEndPatientStatus} setPatientStatus={this.setPatientStatus}/>

      <CodeSwitchAlert onClose={this.showCodeSwitchAlert} showCodeSwitchAlert={this.state.showCodeSwitchAlert} />

      <RhythmCheckForm findMaxId={this.props.findMaxId} stopTimer={this.stopTimer} showRoscAlert={this.showRoscAlert}
        addRhythm={this.props.addRhythm} toggleRhythmCheckForm={this.toggleRhythmCheckForm} onClose={this.showRhythmCheckForm}
        showRhythmCheckForm={this.state.showRhythmCheckForm} showCodeShockForm={this.showCodeShockForm}/>

      <CodeShockForm  onClose={this.showCodeShockForm} showCodeShockForm={this.state.showCodeShockForm}
        showShockRecorded = {this.showShockRecorded} addShock={this.props.addShock} />

      <CodeMedForm  onClose={this.showCodeMedForm} showCodeMedForm={this.state.showCodeMedForm}
        addMed={this.props.addMed} />

      <ShockRecorded onClose={this.showShockRecorded} showShockRecorded={this.state.showShockRecorded}/>

      <RoscAlert addRoscTime={this.addRoscTime} setPatientStatus={this.setPatientStatus}
        onClose={this.showRoscAlert} addRhythm={this.props.addRhythm} showRoscAlert={this.state.showRoscAlert}/>

      {this.state.showMetronome ? <Metronome/> : null}

      </div>




    )
  }
}


export default Timer
