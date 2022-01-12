import React from 'react';
import ReactDOM from 'react-dom';

//* ADD THESE FOR REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/main.scss';
import { Home } from './views';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
