import React, {Component} from 'react'
import Swal from 'sweetalert2'


class SignIn extends Component {
constructor(props){
  super(props)
 this.state ={
   email: '',
   password: ''
 }
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

handleSubmit = ()=> {
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
   if (!this.props.showSignIn) {
      return null
}

Swal.mixin({
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2']
}).queue([
  {
    title: 'Log In',
    input: 'text',
    text: 'Email:',
    inputPlaceholder: 'jdoe@hospital.com'
  },
  {
    title: 'Log In',
    input: 'password',
    text: 'Password:'
 }
]).then((result) => {
  if (result.value)
    this.setState({
      email:result.value[0],
      password:result.value[1]
    })
    this.handleSubmit()
    if (result.value){
      Swal.fire({
      type: 'success',
      title: 'Login Successful!',
      text: 'You will be redirected to the main page.',
      confirmButtonText: 'Close'
    })
  }
  else {
    Swal.fire({
      type: 'error',
      title: 'Login Unsuccessful.',
      text: 'Please try again.',
      confirmButtonText: 'Close'
    })
  }
})


   return (
     <div></div>
       )
 }
}

export default SignIn
