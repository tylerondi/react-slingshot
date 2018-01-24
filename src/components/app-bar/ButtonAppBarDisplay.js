import React from 'react';
import * as PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import PersonIcon from 'material-ui-icons/Person';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {leftDrawerMenuItems, userInfoMenuItems} from './leftDrawerMenu';

const ButtonAppBarDisplay = ({root, menuButton, flex, list, left, toggleDrawer}) => {
  const sideList = (
    <div className={list}>
      <List>{userInfoMenuItems}</List>
      <Divider />
      <List>{leftDrawerMenuItems}</List>
    </div>
  );

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={menuButton}
            onClick={toggleDrawer('left', true)}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon/>
          </IconButton>
          <Drawer open={left} onClose={toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={toggleDrawer('left', false)}
              onKeyDown={toggleDrawer('left', false)}
            >
              {sideList}
            </div>
          </Drawer>
          <Typography type="title" color="inherit" className={flex}>
            Fuel Savings Workshop
          </Typography>
          <IconButton color="inherit">
            <PersonIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ButtonAppBarDisplay.propTypes = {
  root: PropTypes.object.isRequired,
  menuButton: PropTypes.object.isRequired,
  flex: PropTypes.object.isRequired,
  left: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default ButtonAppBarDisplay;
