import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
// require('./favicon.ico');
import './styles/styles.scss';

const store = configureStore();
window.store = store;//makes getstate() available as window.store.getState() in browser console
console.log(store.getState());

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
