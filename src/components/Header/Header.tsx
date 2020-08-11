import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Props } from './Header.interface';
import useStyles from './Header.styles';

const Header: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { title, rightElements, headerClass } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={headerClass}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {rightElements}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
