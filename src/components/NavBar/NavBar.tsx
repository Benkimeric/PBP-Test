import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { FC } from 'react';

import NavigationTabs from './NavigationTabs';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'scroll',
    },
  }),
);

interface Props {
  elevation?: number;
  background?: string;
}

const NavBar: FC<any> = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationTabs />
    </div>
  );
};

export default NavBar;
