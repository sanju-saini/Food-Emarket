import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    height: '360px',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '160px',
    marginTop: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

function HomePage(props) {
  const { classes } = props;
  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Typography variant='p' component='p'>
          Welcome to Food's <br />
          Kitchen
        </Typography>
        <Link to='/menu' className={classes.link}>
          <Button
            variant='contained'
            className={classes.button}
            color='primary'
          >
            GO TO MENU
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default withStyles(styles)(HomePage);
