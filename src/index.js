import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';

import routes from './routes';
import rootReducer from './store/reducers/rootReducer';

const CONTENTFUL_STORE = process.env.REACT_APP_CONTENTFUL_STORE;

const axiosInstance = axios.create({
  baseURL: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_STORE}/`,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
  applyMiddleware(
    thunk.withExtraArgument(axiosInstance),
  ),
),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <div>
        {renderRoutes(routes)}
        </div>
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
