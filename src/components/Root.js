import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider>
        <App />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};