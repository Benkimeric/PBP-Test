import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Props } from './PBPFinancing.interface';
import useStyles from './PBPFinancing.styles';

const PBPFinancing: FC<Props> = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={1}>
      <CardHeader
        className={classes.header}
        title={<Typography className={classes.head}>PBP Financing</Typography>}
        subheader={<Typography className={classes.subhead}>Go to Financing</Typography>}
      />
      <CardContent>
        <Box className={classes.title}>
          <Typography />
          <Typography className={classes.titleText} style={{ paddingLeft: 32 }}>
            Current Balance
          </Typography>
          <Typography className={classes.titleText}>% Available</Typography>
        </Box>
        <Divider />
        <Box className={classes.box}>
          <Typography className={classes.rowName}>Advances</Typography>
          <Typography className={classes.balance}>$13,8008.67</Typography>
          <Typography className={classes.available}>34%</Typography>
        </Box>
        <Divider />
        <Box className={classes.box}>
          <Typography className={classes.rowName}>Invoicing</Typography>
          <Typography className={classes.balance}>$13,8008.67</Typography>
          <Typography className={classes.available}>34%</Typography>
        </Box>
        <Divider />
        <Box className={classes.summary}>
          <div>
            <Typography className={classes.titleText}>Next payment Date</Typography>
            <Typography className={classes.balance}>05-12-2020</Typography>
          </div>
          <div>
            <Typography className={classes.titleText}>Amount Due</Typography>
            <Typography className={classes.balance}>$4569.13</Typography>
          </div>
        </Box>
        <Box className={classes.summary}>
          <div style={{ height: 100, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
            <div>
              <Typography className={classes.titleText}>Average Rate</Typography>
              <Typography className={classes.balance}>2.4%</Typography>
            </div>
            <Typography className={classes.titleText}>
              Questions? <Link to="#">Contact Us.</Link>
            </Typography>
          </div>
          <div>
            <Button className={classes.pay} disableElevation variant="contained" color="primary">
              Pay
            </Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PBPFinancing;
