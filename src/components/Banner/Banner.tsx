import { Grid, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.dark,
      boxSizing: 'border-box',
      height: 144,
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    },
    highlights: {
      borderLeft: '1px solid',
      borderRight: '1px solid',
      padding: 16,
      height: 144,
    },
    highlightsGrid: {
      justifyContent: 'space-between',
      padding: 16,
      boxSizing: 'border-box',
      height: 144,
    },
    div: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      borderLeft: `1px solid ${theme.palette.common.white}`,
    },
    end: {
      borderRight: `1px solid ${theme.palette.common.white}`,
    },
    item: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      color: theme.palette.common.white,
      fontSize: 14,
    },
    count: {
      color: theme.palette.common.white,
      fontSize: 28,
    },
    text: {
      color: theme.palette.common.white,
      fontSize: 10,
    },
  }),
);

const Banner: FC<any> = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid item xs={6}>
        <div>
          <Typography className={classes.name}>Total Sales Orders</Typography>
          <Typography variant="h5" className={classes.count}>
            +16% over
          </Typography>
          <Typography className={classes.count}>Last Month</Typography>
        </div>
      </Grid>
      <Grid className={classes.item} item xs={6}>
        <Grid container>
          <Grid xs={4} item>
            <div className={classes.div}>
              <Typography className={classes.name}>Pending</Typography>
              <Typography variant="h5" className={classes.count}>
                1000
              </Typography>
              <Typography className={classes.text}>Total Units</Typography>
            </div>
          </Grid>
          <Grid xs={4} item>
            <div className={classes.div}>
              <Typography className={classes.name}>In-Production</Typography>
              <Typography variant="h5" className={classes.count}>
                1000
              </Typography>
              <Typography className={classes.text}>Total Units</Typography>
            </div>
          </Grid>
          <Grid xs={4} item>
            <div className={[classes.div, classes.end].join(' ')}>
              <Typography className={classes.name}>Delivered</Typography>
              <Typography variant="h5" className={classes.count}>
                1000
              </Typography>
              <Typography className={classes.text}>Total Units</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;
