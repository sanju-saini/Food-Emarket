import React from 'react';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';

const styles = {
  root: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '70%',
    margin: 'auto',
    marginTop: '100px',
    padding: '20px',
  },
  title: {
    fontWeight: '400',
  },
  message: {
    textAlign: 'left',
    fontSize: '24px',
  },
};

function ThanksPage(props) {
  const { classes } = props;
  return (
    <>
      <Header />
      <Container>
        <Card className={classes.root}>
          <Typography variant='h4' className={classes.title} component='h4'>
            Checkout
          </Typography>
          <Typography variant='p' className={classes.message} component='p'>
            Thanks for your order.
          </Typography>
        </Card>
      </Container>
    </>
  );
}

export default withStyles(styles)(ThanksPage);
