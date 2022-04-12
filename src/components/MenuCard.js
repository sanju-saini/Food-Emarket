import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '20px',
    position: 'relative',
    height: '320px'
  },
  content: {
    margin: '0px'
  },
  buttons: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
  },
});

export default function MenuCard(props) {
  const classes = useStyles();
  const { data, setItemCount, itemCount } = props;

  const addItems = () => {
    setItemCount((prev) => {
      let count = prev[data.title] || 0;
      return {
        ...prev,
        [data.title]: ++count,
      };
    });
  };

  const removeItems = () => {
    setItemCount((prev) => {
      let count = prev[data.title] || 0;
      return {
        ...prev,
        [data.title]: --count,
      };
    });
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='140'
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {data.title}
        </Typography>
        <Typography gutterBottom variant='p' component='p' className={classes.content}>
          Price: {data.price}
        </Typography>
        {itemCount[data.title] ? (
          <>
            <Typography gutterBottom variant='p' component='p' className={classes.content}>
              Total: {itemCount[data.title] || 0}
            </Typography>
            <Typography gutterBottom variant='p' component='p' className={classes.content}>
              Cost(INR): {(itemCount[data.title] || 0) * data.price}
            </Typography>
          </>
        ) : (
          ''
        )}
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button
          variant='contained'
          size='small'
          color='primary'
          onClick={addItems}
        >
          +
        </Button>
        <Button
          variant='contained'
          size='small'
          color='secondary'
          disabled={!itemCount[data.title]}
          onClick={removeItems}
        >
          -
        </Button>
      </CardActions>
    </Card>
  );
}
