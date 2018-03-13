import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import RoorNavigator from './navigation/RoorNavigator';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RoorNavigator />
      </Provider>
    );
  }
}
