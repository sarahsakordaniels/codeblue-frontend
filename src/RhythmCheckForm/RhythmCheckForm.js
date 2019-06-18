import React, {Component} from "react"
// import "./RhythmCheckForm.css"

class RhythmCheckForm extends Component {
  constructor(props){
    super(props)
    this.state=({
      rhythm: '',
      pulse: false,
      showRhythmSelector: false,
      showShockAlertYes: false,
      showShockAlertNo: false,
      time:'',
      showGoodRhythmSelector: false
    })
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e)
    this.setState({
      rhythm: '',
      pulse: false,
      showRhythmSelector: false,
      showShockAlertYes: false,
      showShockAlertNo: false,
      time:'',
      showGoodRhythmSelector: false
    })
  }

  handleRhythmChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    if (event.target.value === "Ventricular Tachycardia"){
          this.setState({
            showShockAlertYes: true,
            showShockAlertNo: false,
            rhythm: "Ventricular Tachycardia",
            time: time
            })
          }
    if (event.target.value === "Ventricular Fibrillation"){
      this.setState({
        showShockAlertYes: true,
        showShockAlertNo: false,
        rhythm: "Ventricular Fibrillation",
        time: time
        })
    }
    if (event.target.value === "Pulseless Electrical Activity"){
      this.setState({
        showShockAlertNo: true,
        showShockAlertYes: false,
        rhythm: "Pulseless Electrical Activity",
        time: time
        })
    }

    if (event.target.value === "Asystole"){
      this.setState({
        showShockAlertNo: true,
        showShockAlertYes: false,
        rhythm: "Asystole",
        time: time
        })
      }

    if (event.target.value === "Normal Sinus Rhythm"){
      this.setState({
        rhythm: "Normal Sinus Rhythm",
        time: time
        })
      }

    if (event.target.value === "Sinus Tachycardia"){
      this.setState({
        rhythm: "Sinus Tachycardia",
        time: time
        })
      }

    if (event.target.value === "Sinus Bradycardia"){
      this.setState({
        rhythm: "Sinus Bradycardia",
        time: time
        })
      }

    if (event.target.value === "Supraventricular Tachycardia"){
      this.setState({
        rhythm: "Supraventricular Tachycardia",
        time: time
        })
      }
  }

  handlePulseClickNo = (event) =>{
    this.setState({
      pulse: false,
      showRhythmSelector: true,
      showGoodRhythmSelector: false
    })
  }

  handlePulseClickYes = (event) =>{
    this.setState({
      pulse: true,
      showGoodRhythmSelector: true,
      showRhythmSelector: false


    })

}

  openCodeShockForm = (event) => {
    this.props.showCodeShockForm()
    this.onClose()
    this.props.addRhythm(this.state.pulse, this.state.rhythm, this.state.time)
  }

  handleSubmit = (event) => {
    if(this.state.pulse === true){
      this.props.showRoscAlert()
      this.props.stopTimer()
    }
    event.preventDefault()
    this.props.addRhythm(this.state.pulse, this.state.rhythm, this.state.time)
    this.setState({
      rhythm: '',
      pulse: false,
      showRhythmSelector: false,
      showShockAlertYes: false,
      showShockAlertNo: false,
      time:'',
      showGoodRhythmSelector: false
    })
    this.onClose()
    }




  render() {

    if (!this.props.showRhythmCheckForm) {
      return null
    }

    return (
      <div class="modal" id="modal">
        <center>
        <h2>Stop Compressions & Check Pulse</h2>

        <div class="content">

      <div class="pulse-check">


      Does the patient have a pulse?<br/>
      <button onClick={this.handlePulseClickYes}>Yes</button>
      <button onClick={this.handlePulseClickNo}>No</button>
      </div><br/>

      <div class="rhythm-check" style={{ display: this.state.showRhythmSelector ? "block" : "none" }}>
        <form onSubmit={this.handleSubmit}>
        Select Dysrhythmia:
          <select name="rhythm" value={this.state.rhythm} onChange={this.handleRhythmChange}>
            <option value="">Select One</option>
            <option value="Ventricular Fibrillation">Ventricular Fibrillation</option>
            <option value="Ventricular Tachycardia">Ventricular Tachycardia</option>
            <option value="Pulseless Electrical Activity">Pulseless Electrical Activity</option>
            <option value="Asystole">Asystole</option>
          </select>
        </form>
      </div>

      <div class="good-rhythm-check" style={{ display: this.state.showGoodRhythmSelector ? "block" : "none" }}>
        <form onSubmit={this.handleSubmit}>
        Select Rhythm:
          <select name="rhythm" value={this.state.rhythm} onChange={this.handleRhythmChange}>
            <option value="">Select One</option>
            <option value="Normal Sinus Rhythm">Normal Sinus Rhythm</option>
            <option value="Sinus Tachycardia">Sinus Tachycardia</option>
            <option value="Sinus Bradycardia">Sinus Bradycardia</option>
            <option value="Supraventricular Tachycardia">Supraventricular Tachycardia</option>
          </select>
        </form>
      </div>

        <br/><br/>
      <div style={{ display: this.state.showShockAlertNo ? "block" : "none" }}>
      Rhythm Not Shockable. Continue Compressions.
      </div>

      <div style={{ display: this.state.showShockAlertYes ? "block" : "none" }}>
      Rhythm Shockable.<br/>
    <button onClick={this.openCodeShockForm}>Record Shock</button>
      </div>
    </div>

      <div class="actions">


        <button class="toggle-button" onClick={this.handleSubmit}>
        Submit
        </button>

        <button class="toggle-button" onClick={this.onClose}>
          Close
        </button>

    </div>
    </center>
  </div>

    )
  }
}
export default RhythmCheckForm
