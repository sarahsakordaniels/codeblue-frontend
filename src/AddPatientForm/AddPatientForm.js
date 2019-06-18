import React, {Component} from 'react'

class AddPatientForm extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      age: '',
      history:'',
      user_id: ''
    }
  }

  handleChange = (event) =>{
       this.setState({
         [event.target.name]:event.target.value
      // [event.target.name]:event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
    })
  }

  handleNumChange = (event) =>{
       this.setState({
         [event.target.name]:parseInt(event.target.value)
      // [event.target.name]:event.target.type === 'number' ? parseInt(event.target.value) : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPatient(this.state.name, this.state.age, this.state.history, this.state.user_id)
    this.setState({
      name:'',
      age: '',
      history:'',
      user_id: ''
    })
  }

  render(){
    return(
      <div>
      <h3>Add A Fucking Patient</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange}/><br/>
        <input type="number" name="age" value={this.state.age} placeholder="Age" onChange={this.handleNumChange}/><br/>
        <input type="text" name="history" value={this.state.history} placeholder="History" onChange={this.handleChange}/><br/>


      <select name="user_id" type="number" value={this.props.user_id} onChange={this.handleNumChange}>
        <option value=''>Select a Nurse</option>
        {this.props.users.map((e)=> {
          return <option value={e.id}>{e.name}</option>
        })}
      </select>
      <input type="submit" value="Submit" />
      </form>


      </div>

    )
  }

}

export default AddPatientForm
