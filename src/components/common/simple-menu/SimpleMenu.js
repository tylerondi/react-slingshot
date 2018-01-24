import React from 'react';
import PropTypes from 'prop-types';
import SimpleMenuDisplay from './SimpleMenuDisplay';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    newButtonText: ''
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (e, menuItemText) => {
    this.setState({ anchorEl: null });
    if (menuItemText != null && menuItemText !== this.state.newButtonText) {
      this.setState({newButtonText: menuItemText});
      e.target.name = this.props.name;
      this.props.onChange(e);
    }
  };

  render() {
    const {anchorEl, newButtonText} = this.state;
    const values = this.props;

    return (
      <SimpleMenuDisplay
        {...values}
        anchorEl={anchorEl}
        newButtonText={newButtonText}
        handleClose={this.handleClose}
        handleClick={this.handleClick}
      />
    );
  }
}

SimpleMenu.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultText: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SimpleMenu;
