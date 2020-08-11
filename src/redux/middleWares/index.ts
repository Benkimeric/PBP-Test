import { all } from 'redux-saga/effects';
import { watchgetOrderssaga } from './ordersSaga';

export default function* rootSaga() {
  yield all([watchgetOrderssaga()]);
}
