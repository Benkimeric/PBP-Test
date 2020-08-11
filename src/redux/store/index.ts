import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../middleWares';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSagas);
export default store;
