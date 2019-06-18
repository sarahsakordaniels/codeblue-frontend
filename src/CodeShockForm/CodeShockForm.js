import React, {Component} from "react"
// import "./CodeShockForm.css"


class CodeShockForm extends Component {
  constructor(props){
    super(props)
    this.state={
      shockTime: '',
      shockEnergy:''
    }
  }

  onClose = (event) => {
    this.props.onClose && this.props.onClose(event)
  }

  handleChange = (event) =>{
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    const { name, value } = event.target
      this.setState({
      [name]: value,
      shockTime: time
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addShock(this.state.shockTime, this.state.shockEnergy)
    this.setState({
      shockEnergy:''
    })
    this.onClose()
    this.props.showShockRecorded()
  }

  render = () => {
    if (!this.props.showCodeShockForm) {
      return null
    }
    const today = new Date()
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    return(
      <div class="modal" id="modal">
        <center>
        <h2>Record Shock</h2>
        <div class="content">
          <form onSubmit={this.handleSubmit}>
            Energy Setting: <input name="shockEnergy" placeholder="Enter Number of Joules" onChange={this.handleChange} /><br/>
            Time of Shock: <input name="shockTime" value={time}  />
          </form>
        </div>
        <div class="actions">
          <button class="toggle-button" onClick={this.handleSubmit}>
            Submit
          </button>
          <button class="toggle-button" onClick={this.onClose}>
            Cancel
          </button>
        </div>
        </center>
      </div>    )
  }
}


export default CodeShockForm
