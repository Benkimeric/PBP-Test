import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Header } from '../Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey['500'],
      marginBottom: -8,
    },
    icon: {
      padding: 4,
    },
    navigationButton: {
      textTransform: 'none',
      fontWeight: 'normal',
      fontSize: 12,
      paddingLeft: 32,
      paddingRight: 32,
    },
    activeNav: {
      borderBottom: `6px solid ${theme.palette.warning.main}`,
      borderRadius: 0,
      fontWeight: 'bold',
    },
    notification: {
      color: theme.palette.error.main,
    },
  }),
);

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <Header
      title="Powered by People."
      headerClass={classes.header}
      rightElements={
        <>
          <Button className={classes.navigationButton}>Dashboard</Button>
          <Button className={[classes.navigationButton, classes.activeNav].join(' ')}>Orders</Button>
          <Button className={classes.navigationButton}>Production</Button>
          <Button className={classes.navigationButton}>Financing</Button>
          <Button className={classes.navigationButton}>Libraries</Button>
          <Button className={classes.navigationButton}>Sign out</Button>
          <FontAwesomeIcon icon={faCog} className={classes.icon} />
          <FontAwesomeIcon icon={faUser} className={classes.icon} />
          <FontAwesomeIcon icon={faBell} className={[classes.icon, classes.notification].join(' ')} />
        </>
      }
    />
  );
};

export default NavigationBar;
