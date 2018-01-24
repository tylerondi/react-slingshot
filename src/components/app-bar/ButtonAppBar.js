import React from 'react';
import PropTypes from 'prop-types';
import withRoot from '../../styles/withRoot';
import { withStyles } from 'material-ui/styles';
import { appBarStyles } from '../../styles/styles';
import ButtonAppBarDisplay from './ButtonAppBarDisplay';

export class ButtonAppBar extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render () {
    const {classes} = this.props;

    return (
      <ButtonAppBarDisplay {...classes} left={this.state.left} toggleDrawer={this.toggleDrawer}/>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(appBarStyles)(ButtonAppBar));
