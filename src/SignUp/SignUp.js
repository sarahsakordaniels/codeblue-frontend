import React, {Component} from 'react'

class SignUp extends Component {
constructor(props){
  super(props)
  this.state ={
    name:'',
    email: '',
    password: ''
  }
}

addNewUser = (name, email, password) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name: name, email: email, password: password})
  }).then(response => response.json())
  .then(data => this.handleResponse(data, this.state.email))
  .catch(error => {
    console.log(error);
  });
}

handleResponse = (response, email)=> {
   localStorage.setItem('token', response.auth_token)
   localStorage.setItem('user_id', response.user_id)
 }

handleChange=(event)=>{
 const {name, value} = event.target
 this.setState({[name]: value})
}

handleSubmit = (event)=> {
 event.preventDefault()
 this.addNewUser(this.state.name, this.state.email, this.state.password)
 this.props.addUserToList(this.state.name, this.state.email, this.state.password)
 this.setState({
   name:'',
   email:'',
   password:''
 })
}

// create = ()=> {
//  window.location = ‘/create-account’
// }


 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <h2>Sign Up For Account</h2>
            Name:<input name="name" value={this.state.name} onChange={this.handleChange}/>
            Email:<input name="email" value={this.state.email} onChange={this.handleChange}/>
            Password:<input name="password" value={this.state.password} onChange={this.handleChange}/>
             <br/>
             <button>Sign Up</button>
         </form>
       )
 }
}

export default SignUp
