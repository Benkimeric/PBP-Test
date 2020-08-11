import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Props } from './ChartComponent.interface';
import useStyles from './ChartComponent.styles';

const TotalSalesOrderUnits: React.FC<Props> = (props) => {
  const {
    chartDescription,
    title,
    description,
    chartLabels,
    chartData,
    barColors,
    chartCardClass,
    cardHeaderClass,
  } = props;
  const classes = useStyles();
  const chartConfig: any = {
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.1,
          borderDashOffset: 0.0,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartData,
          backgroundColor: barColors,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: true,
            },
            ticks: {
              autoSkip: false,
              maxRotation: 20,
              minRotation: 20,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
              beginAtZero: true,
            },
          },
        ],
      },

      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          boxWidth: 0,
          fontStyle: 'bold',
        },
      },
    },
  };

  return (
    <Card className={[classes.root, chartCardClass].join(' ')}>
      <CardHeader
        className={[classes.header, cardHeaderClass].join(' ')}
        title={<Typography className={classes.head}>{title}</Typography>}
        subheader={<Typography className={classes.subhead}>{description}</Typography>}
      />
      {chartDescription && <CardContent>{chartDescription}</CardContent>}
      <div className={'border rounded chartWrapper'}>
        <Bar options={chartConfig.options} data={chartConfig.data} height={230} />
      </div>
    </Card>
  );
};

export default TotalSalesOrderUnits;
