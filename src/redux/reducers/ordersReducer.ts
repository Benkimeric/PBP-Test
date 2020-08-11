import { GET_ORDERS } from '../constants/ordersTypes';
import { BaseAction } from './typed';

const initialState: any = {
  ordersList: null,
  error: null,
  isLoading: false,
};

const getOrders = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_ORDERS}_SUCCESS`:
      return {
        ...state,
        isLoading: false,
        ordersList: action.response,
        error: null,
      };
    case `${GET_ORDERS}_FAILURE`:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default getOrders;
