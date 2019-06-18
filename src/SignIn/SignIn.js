import React, {Component} from 'react'

class SignIn extends Component {

 state ={
   email: '',
   password: ''
 }

 logIn = (email, password) => {
   return fetch("http://localhost:3000/authenticate", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({email: email, password: password})
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
 this.logIn(this.state.email, this.state.password)
 this.setState({
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
       <h2>Please Sign In</h2>
             <input name="email" value={this.state.email} onChange={this.handleChange}/>
             <input name="password" value={this.state.password} onChange={this.handleChange}/>
             <br/>
             <button>Sign In</button>
         </form>
       )
 }
}

export default SignIn
