import React from 'react';
import PropTypes from "prop-types";
import Button from 'material-ui/Button';
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';

const SimpleMenuDisplay = ({
                             id,
                             defaultText,
                             menuItems,
                             anchorEl,
                             newButtonText,
                             handleClose,
                             handleClick
}) => (
  <span>
    <Button
      aria-owns={anchorEl ? id : null}
      aria-haspopup="true"
      onClick={handleClick}
    >
      <Typography type="button" gutterBottom>
        {newButtonText ? newButtonText : defaultText}
        <ArrowDropDownIcon/>
      </Typography>
    </Button>
    <Menu
      id={id}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={() => handleClose(null)}
    >
      {menuItems.map(menuItem => (
        <MenuItem key={menuItem.id}
                  name={menuItem.id}
                  value={menuItem.text}
                  onClick={(e) => handleClose(e, menuItem.text)}>
          {menuItem.text}
        </MenuItem>)
      )}
    </Menu>
  </span>
);

SimpleMenuDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  anchorEl: PropTypes.object,
  newButtonText: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default SimpleMenuDisplay;
