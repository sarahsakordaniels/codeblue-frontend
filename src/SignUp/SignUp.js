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

 render() {

      if (!this.props.showSignUp) {
         return null
       }

       (async function getFormValues () {
       const {value: formValues} = await Swal.fire({
         title: 'Multiple inputs',
         html:
           '<input id="swal-input1" class="swal2-input">' +
           '<input id="swal-input2" class="swal2-input">',
         focusConfirm: false,
         preConfirm: () => {
           return [
             document.getElementById('swal-input1').value,
             document.getElementById('swal-input2').value
           ]
         }
       })

       if (formValues) {
         Swal.fire(JSON.stringify(formValues))
       }
       })()

   return (

<p>This is a placeholder.</p>


      )
   }
}

export default SignUp

// <form onSubmit={this.handleSubmit}>
//   <h2>Sign Up For Account</h2>
//        Name:<input name="name" value={this.state.name} onChange={this.handleChange}/>
//        Email:<input name="email" value={this.state.email} onChange={this.handleChange}/>
//        Password:<input name="password" value={this.state.password} onChange={this.handleChange}/>
//         <br/>
//         <button>Sign Up</button>
//     </form>
