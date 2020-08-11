import { Box, Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';
import React, { FC, Fragment } from 'react';
import { Props } from './Margin.interface';
import useStyles from './Margin.styles';

const Margin: FC<Props> = (props) => {
  const classes = useStyles();
  const { marginData, title, description, planName, actualName } = props;
  return (
    <Card>
      <CardHeader
        className={classes.header}
        title={<Typography className={classes.head}>{title}</Typography>}
        subheader={
          <Box className={classes.subHeader}>
            <Typography className={classes.subhead}>{description}</Typography>
            <Typography className={[classes.subhead, classes.subHeadRight].join(' ')}>{planName}</Typography>
            <Typography className={[classes.subhead, classes.subHeadRight].join(' ')}>{actualName}</Typography>
          </Box>
        }
      />
      <CardContent style={{ padding: 0 }}>
        {marginData?.map((data, index) => (
          <Fragment key={index}>
            <Box className={classes.list}>
              <Typography className={classes.label}>{data.label}</Typography>
              <Typography className={classes.plan}>{data.plan}</Typography>
              <Typography className={classes.plan}>{data.actual}</Typography>
            </Box>
            <Divider />
          </Fragment>
        ))}
      </CardContent>
    </Card>
  );
};

export default Margin;
