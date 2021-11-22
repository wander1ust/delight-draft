import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { IconContext } from "react-icons";
import { IoFastFoodSharp, IoFastFoodOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { Filter } from '../index.js';

// import logo from '../../assets/imgs/logo.jpg';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const customerName = 'Ruby Loyal'; // hardcoded - temp placeholder

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            {/*<img src={logo} alt="logo" height="25px" className={classes.image} /> */}
            {/*<IoFastFoodOutline className={classes.logo}/>*/}
            <IoFastFoodSharp className={classes.logo}/>
            Grumble
          {/*Foodelicious*/}
           {/* City Food*/}
            {/*Expensive Eats*/}
          </Typography>
          <Filter />
          {/*<p className={classes.customerName}> {customerName} </p>*/}
          <div className={classes.grow} />
                    <span className={classes.loggedInUser}> Welcome, <br/> {customerName}</span> <br/>
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
