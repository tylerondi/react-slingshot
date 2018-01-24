import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withStyles } from 'material-ui/styles';
import withRoot from '../../styles/withRoot';
import {fuelSavingPageStyles} from '../../styles/styles';
import * as actions from '../../actions/fuelSavingsActions';
import FuelSavingsForm from '../FuelSavingsForm';

export class FuelSavingsPage extends React.Component {
  saveFuelSavings = () => {
    this.props.actions.saveFuelSavings(this.props.fuelSavings);
  };

  calculateFuelSavings = e => {
    this.props.actions.calculateFuelSavings(this.props.fuelSavings, e.target.name, e.target.value);
  };

  render() {
    const { classes, fuelSavings } = this.props;

    return (
      <div className={classes.root}>
        <FuelSavingsForm
          onSaveClick={this.saveFuelSavings}
          onChange={this.calculateFuelSavings}
          fuelSavings={fuelSavings}
          classes={classes}
        />
      </div>
    );
  }
}

FuelSavingsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(withStyles(fuelSavingPageStyles)(FuelSavingsPage)));
