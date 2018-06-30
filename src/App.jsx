import React from 'react';
import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';
import { hot } from 'react-hot-loader';

import reducers from './reducers';
import EventList from './components/pages/EventList';

const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  })
);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').default; // eslint-disable-line global-require
    store.replaceReducer(combineReducers(nextReducers));
  });
}

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/hoge" component={EventList} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
