import React from 'react';
import * as PropTypes from 'prop-types';
import FuelSavingsResults from './FuelSavingsResults';
import {fuelSavings} from '../types';
import Button from 'material-ui/Button';
import AttachMoneyIcon from 'material-ui-icons/AttachMoney';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SimpleMenu from './common/simple-menu/SimpleMenu';
import {MILES_DRIVEN_PER_DROPDOWN} from '../constants/menus';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const style = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
};

const FuelSavingsForm = ({fuelSavings, onSaveClick, onChange, classes}) => (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Paper
            className={classes.paper}
            elevation={2}
          >
            <Grid item xs={12}>
              <Typography type="title" gutterBottom>
                Fuel Savings Analysis <AttachMoneyIcon/>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Vehicle MPG"
                margin="normal"
                name="newMpg"
                onChange={onChange}
                value={fuelSavings.newMpg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Trade-in MPG"
                margin="normal"
                name="tradeMpg"
                onChange={onChange}
                value={fuelSavings.tradeMpg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="New Vehicle price/gallon"
                margin="normal"
                name="newPpg"
                onChange={onChange}
                value={fuelSavings.newPpg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Trade-in price/gallon"
                margin="normal"
                name="tradePpg"
                onChange={onChange}
                value={fuelSavings.tradePpg}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Miles Driven"
                margin="normal"
                name="milesDriven"
                onChange={onChange}
                value={fuelSavings.milesDriven}
              />
            </Grid>
            <Grid item xs={12}>
              miles per
              <SimpleMenu
                id="miles-driven-time-frame"
                name="milesDrivenTimeframe"
                defaultText="Choose Time Period"
                menuItems={MILES_DRIVEN_PER_DROPDOWN}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography type="body1" gutterBottom>Date Modified: {fuelSavings.dateModified}</Typography>
              <hr/>

              {fuelSavings.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={fuelSavings.savings}/>}
            </Grid>
            <Grid item xs={12}>
              <Button
                // style={style}
                raised
                color="primary"
                onClick={onSaveClick}>
                Save
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );

FuelSavingsForm.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  fuelSavings: fuelSavings.isRequired,
  classes: PropTypes.object.isRequired
};

export default FuelSavingsForm;
