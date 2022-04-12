import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CartIcon({ cartItems }) {
  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={cartItems} color='secondary'>
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
