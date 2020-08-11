import { Box, Divider, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { ChartDescriptionData } from './ChartComponent.interface';
import useStyles from './ChartComponent.styles';

const ChartDescription: FC<ChartDescriptionData> = (props) => {
  const classes = useStyles();
  const { chartDescriptionData } = props;
  return (
    <>
      {chartDescriptionData?.map((data) => (
        <>
          <Box className={classes.row}>
            <Typography className={classes.labelText} style={{ fontSize: 12 }}>
              {data.label}
            </Typography>
            <Typography style={{ fontSize: 24 }}>{data.value}</Typography>
          </Box>
          <Divider />
        </>
      ))}
    </>
  );
};

export default ChartDescription;
