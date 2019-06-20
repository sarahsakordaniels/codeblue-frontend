import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component{



  render(){
    return(
      <div style={{color: '#d4dde1', paddingTop: 10, paddingBottom: 50}}>
        Made with
        <IconButton edge="start" style={{color: '#d71700', marginLeft:.5, marginRight: .2}}>
          <FontAwesomeIcon icon={faHeartbeat} />
        </IconButton>
        by Sarah Sakor Daniels, a Flatiron School software engineering graduate.
      </div>
    )
  }
}


export default Footer
