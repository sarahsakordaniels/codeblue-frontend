import React, {Component} from 'react'
import './App.css'
import SignUp from './SignUp/SignUp'
import Footer from './Footer'
import SignIn from './SignIn/SignIn'
import PatientList from './PatientList/PatientList'
import CodeContainer from './CodeContainer/CodeContainer'
import AddPatientForm from './AddPatientForm/AddPatientForm'
import { Route, Switch, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'




class App extends Component{
  constructor(){
    super()
    this.state = {
      medications: [],
      users: [],
      patients: [],
      showSignUp: false
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

    showSignUp = e => {
      this.setState({
        showSignUp: !this.state.showSignUp
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
        <div style={{ color: '#d4dde1', padding: 25}}>
          <body>
          </body>
        </div>
        <center>

          <div>
            <img class="image animated infinite pulse slow" style={{marginTop: 15, marginBottom: 30, borderTopRightRadius: 200, borderTopLeftRadius: 30, borderBottomLeftRadius: 200, borderStyle: 'solid', borderWidth: 10, borderColor: '#d4dde1'}} src='https://lh3.googleusercontent.com/m3WgEgF8_vZkWx1PQNePIWEuu8Cg0OEKhJwWEFFqVSxcwZNlcRu6wxVDxitJWF1HGEI6mDUJTZveyhJ2_97wy5kKLnMRn5JeMB6iGDq2MlYbD7bPj7sphTiJ-XLMCHBr1lCJYOK-UmDRzm6vfRo7kleRypk7ewCX5S3MeJcXdCsLBVoQoqMzFdOD0pSQGIwOSELyCiHCkR7_txP1Ou2hpV45_UTe75Z3fSSYEkDa90Y05JbH5XJLRaCifGl66mEb5PeDAJdB04YhgNZqxnEUWciZq5bxT07P_3cBea7kOkXaESeiIAPh_e0Pf8vC86GLDld8bipD_i6za0Juo5EcQsnqfZ0KpSE34a1GPeHeOXGfucZhmFOC65HguAnQS9YuYU-KIwPB6k4WgHbg6VeCzIsmz4FQbNs8X9cmDVtMSiLGhdOs8bk7H7AwVGEsqbxJN6geFHRMmv0dz162SsGnvFdxlkY6od1TZi9OWdmglUqyHeaG7qVgDU-AECzRt6_AtXw4K79nmeCE7oyIeCHPmDT5MRz9zs1N7MOda0uEninh1rpEcoF9UKsQ1JuiPUXlauYvq1XGRzMXnJaFLZQGmRMiHmahi_mHH2lK09hdbSA4bdin_gofIDHJTMt2Sja91MDJsnbhrLWfDaG8osIODZZhvAHjML4=w1316-h670-no' />
          </div>

          <div style={{color: '#d4dde1', padding: 50}}>
              <Button variant="contained" style={{backgroundColor: '#aa4b41',color: '#d4dde1', fontFamily:'Montserrat', boxShadow: "2px 2px 2px 2px #2d3033"}} size="large" onClick={this.showSignUp}>
                Create Account
              </Button>
                <br/>
                <br/>
              <Button variant="contained" style={{backgroundColor: '#aa4b41', color: '#d4dde1', fontFamily:'Montserrat', boxShadow: "2px 2px 2px 2px #2d3033"}} size="large" onClick={this.showSignIn}>
                Log In
              </Button>
          </div>

          <div>
            <SignUp showSignUp={this.showSignUp} addUserToList={this.addUserToList} showSignUp={this.state.showSignUp}/>
          </div>
          <Footer />
        </center>
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



// <Switch>
//   <Route path="/signin" render={(props)=> <SignIn {...props} />} />
//   <Route path="/patients" render={(props)=> <PatientList patients={this.state.patients} />} />
//   <Route path="/signup" render={(props)=> <SignUp {...props} addUserToList={this.addUserToList} />} />
//   <Route path="/addpatient" render={(props)=> <AddPatientForm {...props} addPatient={this.addPatient} patients={this.state.patients} users={this.state.users}/>} />
//   <Route path="/code" render={(props)=> <CodeContainer {...props} patients={this.state.patients} users={this.state.users}/>} />
// </Switch>
