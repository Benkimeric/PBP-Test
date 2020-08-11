import { GET_ORDERS } from '../constants/ordersTypes';

export const getOrders = (data?: any) => ({
  type: GET_ORDERS,
  data,
});

export const getOrdersSuccess = (response: any) => ({
  type: `${GET_ORDERS}_SUCCESS`,
  response,
});

export const getOrdersFailure = (error?: any) => ({
  type: `${GET_ORDERS}_FAILURE`,
  error,
});
