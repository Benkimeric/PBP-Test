import { put, takeLatest } from 'redux-saga/effects';

import { getOrdersFailure, getOrdersSuccess } from '../actionCreator/ordersActions';
import { GET_ORDERS } from '../constants/ordersTypes';
import { BaseAction } from '../reducers/typed';

function* getOrderssaga(action: BaseAction) {
  try {
    // simulate getting response from server
    const response = {
      saleOrders: {
        marketPerformancePercentage: '+16',
        period: 'month',
        units: {
          pending: 1000,
          inProduction: 1000,
          delivered: 1000,
        },
      },
      financing: {
        advances: {
          currentBalance: '13,8008.67',
          availablePercentage: 34,
        },
        invoicing: {
          currentBalance: '13,8008.67',
          availablePercentage: 34,
        },
        nextPayDate: '05-12-2020',
        amountDue: '4569.13',
        avgRate: 2.4,
      },
      margin: {
        currentWeek: {
          percentagePlan: 54,
          percentageActual: 61,
        },
        currentMonth: {
          percentagePlan: 54,
          percentageActual: 61,
        },
      },
      pendingOrders: {
        orders: {
          currentMonth: 12,
          lastMonth: 9,
        },
        units: {
          currentMonth: 1755,
          lastMonth: 2219,
        },
        salesOrderValueAndUnits: {
          units: { totalSalesOrderUnits: 9876, percentageIncrease: 14 },
          value: { totalValue: '132,08.09', percentageIncrease: '+11' },
        },
      },

      salesOrderList: {
        list: [
          {
            saleOrder: '000123',
            customer: 'Nordstrom',
            date: '2020-03-15',
            value: '$1650.00',
            orderStatus: 'Pre-Prod',
            reviewStatus: 'Approved ',
            productionPlan: 'Pending',
          },
          {
            saleOrder: '459009',
            customer: 'Liberty',
            date: '2019-11-15',
            value: '$8750.00',
            orderStatus: 'Delivered',
            reviewStatus: 'Approved ',
            productionPlan: 'MERSP20',
          },
          {
            saleOrder: '678909',
            customer: 'IKEA',
            date: '2019-12-15',
            value: '$21650.00',
            orderStatus: 'Delivered',
            reviewStatus: 'Approved ',
            productionPlan: 'IKRSP76',
          },
          {
            saleOrder: '890763',
            customer: 'Mercado USA',
            date: '2020-03-15',
            value: '$1650.00',
            orderStatus: 'In-Prod',
            reviewStatus: 'Approved ',
            productionPlan: 'Pending',
          },
        ],
      },
    };
    yield put(getOrdersSuccess(response));
  } catch (error) {
    yield put(getOrdersFailure(error));
  }
}

export function* watchgetOrderssaga() {
  yield takeLatest(GET_ORDERS, getOrderssaga);
}
