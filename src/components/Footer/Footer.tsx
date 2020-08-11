import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';
import logo from '../../media/PBPLogo.jpeg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialIcons: {
      justifyContent: 'flex-end',
    },
    icon: {
      paddingRight: 15,
    },
    footer: {
      backgroundColor: theme.palette.grey['400'],
      padding: 16,
      fontSize: 12,
    },
    logoImage: {
      width: 40,
      height: 40,
    },
    footerElements: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

const Footer: FC<any> = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={[classes.footer, classes.footerElements].join(' ')} container spacing={2}>
        <Grid item xs={8}>
          <Grid container className={classes.footerElements}>
            <Grid item xs={3}>
              <img className={classes.logoImage} src={logo} alt="logo" />
            </Grid>
            <Grid item xs={3}>
              Privacy Policy
            </Grid>
            <Grid item xs={3}>
              Terms of service
            </Grid>
            <Grid item xs={3}>
              Contact us
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container className={classes.socialIcons}>
            <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
            <FontAwesomeIcon icon={faTwitter} className={classes.icon} />
            <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
