import React, {Component} from "react"
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import "./CodeShockForm.css"

const today = new Date()
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

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

  handleSubmit = () => {
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

    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Record Shock',
        text: 'Energy Setting:',
        inputPlaceholder: 'Enter in Joules'
      },
      {
        title: 'Record Shock',
        text: 'Time of Shock:',
        inputValue: `${time}`
      }

    ]).then((result) => {
      if (result.value)
        this.setState({
        shockEnergy:result.value[0],
        shockTime:(result.value[1])
      })
        this.handleSubmit()
        if (result.value){
          Swal.fire({
          title: 'Shock Recorded',
          text: 'Continue compressions',
          confirmButtonText: 'Close'
        })
      }
      else {
        Swal.fire({
          title: 'No Shock Recorded',
          text: 'Continue compressions',
          confirmButtonText: 'Close'
        })
      }
    })


    return(
<div>
</div>

    )
  }
}


export default CodeShockForm
