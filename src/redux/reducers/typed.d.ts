export interface BaseAction {
  type: string;
  data?: any;
  error?: any;
  response?: any;
  payload?: any;
  pageName?: string;
}

export interface RootState {
  orders: any;
}
