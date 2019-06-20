import React, {Component} from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './LandingPage.css'
import Swal from 'sweetalert2'
import { Route, Switch, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'


class LandingPage extends Component{
constructor(props){
  super(props)
  this.state={
    showSignUp: false
  }
}

showSignUp = e => {
  this.setState({
    showSignUp: !this.state.showSignUp
  })
}


  render(){

    return(

<div class="background">

  <div style={{ color: '#d4dde1', padding: 25}}>
    <body>
    </body>
  </div>
  <center>

    <div>
      <img class="image animated infinite pulse slow" style={{marginTop: 15, marginBottom: 30, borderTopRightRadius: 200, borderTopLeftRadius: 30, borderBottomLeftRadius: 200, borderStyle: 'solid', borderWidth: 10, borderColor: '#d4dde1'}} src='https://lh3.googleusercontent.com/m3WgEgF8_vZkWx1PQNePIWEuu8Cg0OEKhJwWEFFqVSxcwZNlcRu6wxVDxitJWF1HGEI6mDUJTZveyhJ2_97wy5kKLnMRn5JeMB6iGDq2MlYbD7bPj7sphTiJ-XLMCHBr1lCJYOK-UmDRzm6vfRo7kleRypk7ewCX5S3MeJcXdCsLBVoQoqMzFdOD0pSQGIwOSELyCiHCkR7_txP1Ou2hpV45_UTe75Z3fSSYEkDa90Y05JbH5XJLRaCifGl66mEb5PeDAJdB04YhgNZqxnEUWciZq5bxT07P_3cBea7kOkXaESeiIAPh_e0Pf8vC86GLDld8bipD_i6za0Juo5EcQsnqfZ0KpSE34a1GPeHeOXGfucZhmFOC65HguAnQS9YuYU-KIwPB6k4WgHbg6VeCzIsmz4FQbNs8X9cmDVtMSiLGhdOs8bk7H7AwVGEsqbxJN6geFHRMmv0dz162SsGnvFdxlkY6od1TZi9OWdmglUqyHeaG7qVgDU-AECzRt6_AtXw4K79nmeCE7oyIeCHPmDT5MRz9zs1N7MOda0uEninh1rpEcoF9UKsQ1JuiPUXlauYvq1XGRzMXnJaFLZQGmRMiHmahi_mHH2lK09hdbSA4bdin_gofIDHJTMt2Sja91MDJsnbhrLWfDaG8osIODZZhvAHjML4=w1316-h670-no' />
    </div>

    <div style={{color: '#d4dde1', padding: 50}}>
        <Button variant="contained" color="primary" size="large" onClick={this.showSignUp}>
          Create Account
        </Button>
          <br/>
          <br/>
        <Button variant="contained" color="primary" size="large" onClick={this.showSignIn}>
          Log In
        </Button>
    </div>

    <div>
      <SignUp showSignUp={this.showSignUp} addUserToList={this.addUserToList} showSignUp={this.state.showSignUp}/>
    </div>


    <div style={{color: '#d4dde1', paddingTop: 300, paddingBottom: 30}}>
        <p>A place for a footer.</p>
    </div>

  </center>
</div>



    )
  }
}






export default LandingPage
