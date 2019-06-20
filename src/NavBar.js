import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
    },
  title: {
    flexGrow: 1
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (

    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor: '#2d3033'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={{color: '#d4dde1'}} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{color: '#d4dde1', fontFamily:'Montserrat'}} className={classes.title}>
            C o d e C o u r s e
          </Typography>
            <Button style={{color: '#d4dde1', fontFamily:'Lora'}}>
                <IconButton edge="start" className={classes.menuButton} style={{color: '#ffffff', marginRight: -4 }} aria-label="Menu">
                  <FontAwesomeIcon icon={faUserMd} />
                </IconButton>
                  Login
            </Button>
        </Toolbar>
      </AppBar>
    </div>

  );
}
