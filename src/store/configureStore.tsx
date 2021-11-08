import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
));
sagaMiddleware.run(rootSaga);

export default store;
