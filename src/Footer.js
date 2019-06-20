import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton';
import Swal from 'sweetalert2'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component{



  render(){
    return(
      <div class="row" style={{color: '#d4dde1', paddingTop: 20, paddingBottom: 50, fontFamily:'Montserrat'}}>
        Made with
          <IconButton edge="start" style={{color: '#d71700', marginLeft:.5, marginRight: .2}}>
            <FontAwesomeIcon icon={faHeartbeat} />
            </IconButton>
            by Sarah Sakor Daniels, a <div style={{width:'75px',height:'auto'}}><img src={'https://lh3.googleusercontent.com/XPxjt-10EKlxiIroRzo9LAFIDPFtJ5OaP4zoZUBP_o4toPSwZ8JTF0kvVFBkSWV8y0oaiYzrYAYfXoEkNdJhMkwoLifJHPR_FYqNHjzKJ_2-Q2K5A_47PMCWnlPRnfLj7rZuc0xJUccFv2n4fCDu-MT_1eEtC-dZZIhrK2e-QONYHGMPr5OCCPHDtX_OWfx9_vS3i7UlQ9MV5sooPWr2yJgrTFfAz7IpOCJcpmdpIUt4U1hUZGNn15cYSZ1kBR-Fr7-U1UtFRIYZSrtaK7fv6a8GBHRtn4ZVsPZzApRtiHm422ASoeA1ni-6qc9W7uggJJNh88ilvw-QQn3ehAtPu-jNKiCssbT_lJBfZxYqh2BQOLImjOU7EihdGA7TmGRpxbgm1znw227wrzpiGPdVeEhrzxJqea2sxpDLB3hZk--kZUTIYWfmBgy9CCAEcpN2Jbcks6vurrvZhQpWzulbByNSkTdMNivoCX2Xk3Qvcjhq4NZ6A0uJoRTZ65lLT176_wozYFy9U2rGIw64-xPzqU07iPvtznMZTQKUJgaNpZMhhaLwsDkU7h2qJ_gltazkfnB8YHB9lz-EhS7yI6AkI0Ka8LxBbKPSENghDMbqNqam-Ons0SnIZ8xmkRqmwF61EqPIAk19IRgomQ9BnPMMn7rPv440pdw=w1000-h561-no'}/></div>software engineering graduate.
      </div>
    )
  }
}


export default Footer
