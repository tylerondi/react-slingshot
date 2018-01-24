import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import LocalPlayIcon from 'material-ui-icons/LocalPlay';
import InfoIcon from 'material-ui-icons/Info';
import { NavLink } from 'react-router-dom';

export const userInfoMenuItems = (
  <div>
    Welcome Tyler Ondricek
  </div>
);

export const leftDrawerMenuItems = (
  <div>
    <NavLink exact to="/" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>
    <NavLink exact to="/fuel-savings" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <LocalPlayIcon />
        </ListItemIcon>
        <ListItemText primary="Demo App" />
      </ListItem>
    </NavLink>
    <NavLink exact to="/about" style={{textDecoration: 'none'}}>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </NavLink>
  </div>
);
