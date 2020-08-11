import { Breadcrumbs, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import { ChartComponent } from '../../components/ChartComponent';
import ChartDescription from '../../components/ChartComponent/ChartDescription';
import { CustomStepper } from '../../components/CustomStepper';
import { CustomTable } from '../../components/CustomTable';
import Gantt from '../../components/GanttChart/GanttChart';
import { Header } from '../../components/Header';
import { Margin } from '../../components/Margin';
import { PBPFinancing } from '../../components/PBPFinancing';
import { SearchInput } from '../../components/SearchInput';
import { ShareActionIcons } from '../../components/ShareActionIcons';

import { getOrders } from '../../redux/actionCreator/ordersActions';
import { RootState } from '../../redux/reducers/typed';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepper: {
      backgroundColor: theme.palette.secondary.light,
      padding: 32,
      marginTop: 32,
    },
    stepperLabel: {
      display: 'flex',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: theme.palette.grey['500'],
    },
    breadCrumbs: {
      paddingRight: 30,
    },
    breadCrumbItem: {
      fontSize: 12,
      padding: 16,
    },
    shareIcons: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 16,
    },
    header: {
      backgroundColor: theme.palette.grey['400'],
      color: theme.palette.grey['500'],
    },
    head: {
      fontSize: 16,
    },
    subhead: {
      fontSize: 12,
      color: theme.palette.primary.main,
    },
    pendingOrders: {
      paddingTop: 26,
    },
    orderValuesChart: {
      backgroundColor: theme.palette.warning.light,
    },
    orderValuesHeader: {
      backgroundColor: theme.palette.warning.dark,
    },
  }),
);

const data = {
  data: [
    { id: 1, text: '', start_date: '15-04-2019', duration: 3, progress: 1 },
    { id: 2, text: '', start_date: '15-04-2019', duration: 3, progress: 1, color: '#EEA797' },
  ],
};

const Orders: FC<any> = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [orders, setOrders] = useState<any>();
  const { ordersList } = useSelector((state: any) => state.orders);

  // simulate fetching of data
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    setOrders(ordersList);
  }, [ordersList]);

  return (
    <>
      <Header
        title="Sales Order Review"
        headerClass={classes.header}
        rightElements={
          <>
            <Breadcrumbs separator={'>'} aria-label="breadcrumb" className={classes.breadCrumbs}>
              <Typography className={classes.breadCrumbItem}>PBP</Typography>
              <Typography className={classes.breadCrumbItem}>Breadcrumbs</Typography>
              <Typography className={classes.breadCrumbItem}>Current Page</Typography>
            </Breadcrumbs>

            <SearchInput />
          </>
        }
      />
      <Banner
        marketPerformancePercentage={orders?.saleOrders.marketPerformancePercentage}
        period={orders?.saleOrders.period}
        pending={orders?.saleOrders.units.pending}
        inProduction={orders?.saleOrders.units.inProduction}
        delivered={orders?.saleOrders.units.delivered}
      />
      <Grid container>
        <Grid item className={classes.shareIcons}>
          <ShareActionIcons />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Gantt tasks={data} />
        </Grid>
        <Grid item xs={12} md={4}>
          <PBPFinancing />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Margin
            title="Margin"
            description="View by Year"
            planName="Plan"
            actualName="Actual"
            marginData={[
              {
                label: 'This Week',
                plan: '54%',
                actual: '61%',
              },
              {
                label: 'This Month',
                plan: '54%',
                actual: '61%',
              },
            ]}
          />
          <div className={classes.pendingOrders}>
            <Margin
              title="Pending Orders"
              description="View by Year"
              planName="This Month"
              actualName="This Month"
              marginData={[
                {
                  label: 'Orders',
                  plan: '12',
                  actual: '09',
                },
                {
                  label: 'Units',
                  plan: '1755',
                  actual: '2219',
                },
              ]}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <ChartComponent
            title="Total Sales Order Units"
            description="View by Year"
            chartLabels={['Month', 'Month', 'Month', 'Month', 'Month', 'Month']}
            chartData={[10, 9, 4, 9, 7, 5]}
            barColors={['#1F4E79', '#38658A', '#4F7B9A', '#4F7B9A', '#7DA6BB', '#4F7B9A']}
            chartDescription={
              <ChartDescription
                chartDescriptionData={[
                  { label: 'Total Orders', value: '9876' },
                  { label: 'Last Month', value: '+14%' },
                ]}
              />
            }
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ChartComponent
            title="Total Sales Order Value"
            description="View by Year"
            chartLabels={['Month', 'Month', 'Month', 'Month', 'Month', 'Month']}
            barColors={['#1F4E79', '#4A6B8C', '#73869E', '#9BA3B1', '#C3BDC2', '#73869E']}
            chartData={[10, 9, 4, 9, 7, 5]}
            chartCardClass={classes.orderValuesChart}
            cardHeaderClass={classes.orderValuesHeader}
            chartDescription={
              <ChartDescription
                chartDescriptionData={[
                  { label: 'Total Value', value: '$132,08.09' },
                  { label: 'Last Month', value: '+11%' },
                ]}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.stepper}>
            <Typography className={classes.stepperLabel}>Creating a Production Plan</Typography>
            <CustomStepper />
          </div>
        </Grid>
      </Grid>
      <CustomTable />
    </>
  );
};

export default Orders;
