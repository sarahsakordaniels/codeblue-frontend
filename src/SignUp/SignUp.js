import React, {Component} from 'react'
import Swal from 'sweetalert2'


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

handleSubmit = ()=> {
 this.addNewUser(this.state.name, this.state.email, this.state.password)
 this.props.addUserToList(this.state.name, this.state.email, this.state.password)
 this.setState({
   name:'',
   email:'',
   password:''
 })
}

 render() {

      if (!this.props.showSignUp) {
         return null
       }


       Swal.mixin({
         confirmButtonText: 'Next &rarr;',
         showCancelButton: true,
         progressSteps: ['1', '2', '3']
       }).queue([
         {
           title: 'Create Account',
           input: 'text',
           text: 'Your Name:',
           inputPlaceholder: 'Jane Doe, RN'
         },
         {
           title: 'Create Account',
           input: 'text',
           text: 'Email:',
           inputPlaceholder: 'jdoe@hospital.com'
         },
         {
           title: 'Create Account',
           input: 'password',
           text: 'Password:'
        }
       ]).then((result) => {
         if (result.value)
           this.setState({
             name:result.value[0],
             email:result.value[1],
             password:result.value[2]
           })
           this.handleSubmit()
           if (result.value){
             Swal.fire({
            type: 'success',
             title: 'Account Created!',
             text: 'Please log in to access patient data.',
             confirmButtonText: 'Close'
           })
         }
         else {
           Swal.fire({
             type: 'error',
             title: 'Account Creation Unsuccessful',
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

export default SignUp
