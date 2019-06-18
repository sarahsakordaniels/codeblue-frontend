import React, {Component} from 'react'
import './App.css'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'
import PatientList from './PatientList/PatientList'
import CodeContainer from './CodeContainer/CodeContainer'
import AddPatientForm from './AddPatientForm/AddPatientForm'
import { Route, Switch } from 'react-router-dom'



class App extends Component{
  constructor(){
    super()
    this.state = {
      medications: [],
      users: [],
      patients: [],
      }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => this.setState({users}))
    fetch('http://localhost:3000/patients')
        .then(response => response.json())
        .then(patients => this.setState({patients}))
    fetch('http://localhost:3000/medications')
        .then(response => response.json())
        .then(medications => this.setState({medications}))
    }

// USERS //
    addUserToList = (name, email, password) => {
      const {users} = this.state
      const newUser = {name, email, password}
      const userList = [...users, newUser]
      this.setState({
        users: userList
      })
    }

// PATIENTS //

      addPatient = (name, age, history, user_id) => {
        const newPatient = {name, age, history, user_id}
        const patientList = [...this.state.patients, newPatient]
        this.setState({
          patients: patientList
        })
      const body = {name:name, age:age, history:history, user_id:user_id}
      fetch('http://localhost:3000/patients', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
        })
        .catch(error => (console.error(error.message)))
      }

  render = () => {


    return(

      <div>
        <div class="title">
        <center>
        <h1>Corporate American Hospital</h1>
        <p><i>We care...about your money.</i></p>
        </center>
        </div>
        <Switch>
          <Route path="/signin" render={(props)=> <SignIn {...props} />} />
          <Route path="/patients" render={(props)=> <PatientList patients={this.state.patients} />} />
          <Route path="/signup" render={(props)=> <SignUp {...props} addUserToList={this.addUserToList} />} />
          <Route path="/addpatient" render={(props)=> <AddPatientForm {...props} addPatient={this.addPatient} patients={this.state.patients} users={this.state.users}/>} />
          <Route path="/code" render={(props)=> <CodeContainer {...props} patients={this.state.patients} users={this.state.users}/>} />
        </Switch>
      </div>

    )
  }
}

export default App

// <div>
// <body class="news">
//   <header>
//     <div class="nav">
//       <ul>
//         <li class="home"><Link to="/">Home</Link></li>
//         <li class="tutorials"><Link to="/patients">Patients</Link></li>
//         <li class="about"><Link to="/signin">Sign In</Link></li>
//         <li class="news"><Link to="/signup">Sign Up</Link></li>
//         <li class="contact"><Link to="/code">Code</Link></li>
//       </ul>
//     </div>
//   </header>
// </body>
//
// </div>
// <div class='test'>
// <div class="paper">
//
// </div>
// </div>
