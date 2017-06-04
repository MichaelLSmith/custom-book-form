import React, { Component } from 'react';
import Name from '../components/Name';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBook } from '../actions';

import { validate } from '../utils/validation';

export class BookForm extends Component {
  // handle
  render () {
  const { reset } = this.props;
    return (
      <form className="book-form">
        <Name />
        <button type="submit">Submit</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewBookForm',
  validate
})(
  connect(null, { createBook })(BookForm)
);

// form will only render children form components
// it will probably handle the app state connected to redux
