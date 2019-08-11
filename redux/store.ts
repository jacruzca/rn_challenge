import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export function configureStore(
) {

  let middleware = compose(applyMiddleware(thunk)) as StoreEnhancer;
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middleware = compose(
      applyMiddleware(thunk),
      applyMiddleware(logger)
    ) as StoreEnhancer;
  }

  const store = createStore(rootReducer, middleware);

  return store;
}
