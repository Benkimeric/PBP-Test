import { StepConnector } from '@material-ui/core';
import { Stepper, Typography } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: 'transparent',
    },
    label: {
      padding: 16,
    },
    icon: {
      color: '#FF0000',
    },
    stepIcon: {
      transform: 'scale(3)',
      color: '#A0C7C6',
      zIndex: 1000,
    },
    stepperWrapper: {
      overflow: 'scroll',
    },
  }),
);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    backgroundColor: '#FF0000',
  },
  active: {
    '& $line': {
      borderColor: '#A0C7C6',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#A0C7C6',
    },
  },
  line: {
    overflow: 'hidden',
    borderColor: '#A0C7C6',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const CustomStepper = () => {
  const classes = useStyles();
  const [activeStep] = React.useState(0);
  const steps = [
    { label: 1, value: 'Select Sales Orders' },
    { label: 2, value: 'Create and Name Plan' },
    { label: 3, value: 'Create Work Orders' },
    { label: 4, value: 'Create Purchase Orders' },
    { label: 5, value: 'Confirm Production Plan' },
  ];

  return (
    <div className={classes.stepperWrapper}>
      <Stepper className={classes.root} activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              StepIconProps={{
                classes: { root: classes.stepIcon },
              }}
            >
              <Typography className={classes.label}>{label.value}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CustomStepper;
