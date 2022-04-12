import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: '20px',
  },
  cart: {
    marginRight: '50px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
};

function Header(props) {
  const { classes, cartItems } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.root}>
        <Link to='/' className={classes.link}>
          <Toolbar>
            <RestaurantIcon />
            <Typography variant='h6' className={classes.title}>
              Food's Restaurant
            </Typography>
          </Toolbar>
        </Link>
        {cartItems !== undefined ? (
          <Link to={cartItems ? '/xyz' : ''} className={classes.link}>
            <Typography component='div' className={classes.cart}>
              <CartIcon cartItems={cartItems} />
            </Typography>
          </Link>
        ) : (
          ''
        )}
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
 