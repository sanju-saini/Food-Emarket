import React, { useState } from 'react';
import Header from './Header';
import MenuCard from './MenuCard';
import { foodList } from '../data/foodList';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 'auto',
    width: '70%',
    flexWrap: 'wrap',
  },
});

function MenuPage(props) {
  const [itemCount, setItemCount] = useState({});
  const classes = useStyles();
  const countItems = () => {
    const data = Object.keys(itemCount).filter((item) => !!itemCount[item]);
    return data.length;
  };
  return (
    <>
      <Header cartItems={countItems()} />
      <Container>
        <Typography component='div' className={classes.root}>
          {foodList.map((item, index) => (
            <MenuCard
              data={item}
              key={index}
              setItemCount={setItemCount}
              itemCount={itemCount}
            />
          ))}
        </Typography>
      </Container>
    </>
  );
}

export default MenuPage;
