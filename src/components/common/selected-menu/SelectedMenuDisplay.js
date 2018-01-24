import React from 'react';
import PropTypes from "prop-types";
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';

const SelectedMenuDisplay = ({
                               id,
                               classes,
                               label,
                               handleClickListItem,
                               options,
                               selectedIndex,
                               anchorEl,
                               handleClose,
                               handleMenuItemClick
}) => (
  <span className={classes.root}>
    <List>
      <ListItem
        button
        aria-haspopup="true"
        aria-controls="lock-menu"
        aria-label="When device is locked"
        onClick={handleClickListItem}
      >
        <ListItemText
          primary="When device is locked"
          secondary={options[selectedIndex]}
        />
      </ListItem>
    </List>
    <Menu
      id="lock-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {options.map((option, index) => (
        <MenuItem
          key={option}
          disabled={index === 0}
          selected={index === selectedIndex}
          onClick={event => handleMenuItemClick(event, index)}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  </span>
);

SelectedMenuDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object,
  label: PropTypes.string.isRequired,
  handleClickListItem: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  anchorEl: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleMenuItemClick: PropTypes.func.isRequired
};

export default SelectedMenuDisplay;
