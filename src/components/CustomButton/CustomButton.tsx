import { Fab } from '@material-ui/core';
import React, { FC } from 'react';
import { Props } from './CustomButton.interface';
import useStyles from './CustomButton.styles';

const CustomButton: FC<Props> = (props) => {
  const { text } = props;
  const classes = useStyles();
  return (
    <Fab
      size="small"
      className={classes.fabButton}
      disableTouchRipple
      disableFocusRipple
      disableRipple
      variant="extended"
    >
      {text}
    </Fab>
  );
};

export default CustomButton;
