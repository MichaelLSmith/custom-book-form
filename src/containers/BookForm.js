import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createOrder } from '../actions';
import Name from '../components/Name';

// import { validate } from '../utils/validation';
import * as formValidations from '../utils/validation.lib';

//exporting the base class component for testing
export class BookForm extends Component {
  handleOnSubmit(values) {
    console.log('props in handleOnSubmit', this.props);
    console.log('values in handleOnSubmit()', values);
    this.props.createOrder(values);
  }
  render () {
  const { reset, handleSubmit } = this.props;
    return (
      <form className="book-form" onSubmit={handleSubmit(this.handleOnSubmit.bind(this))}>
        <Name />
        <button type="submit">Submit</button>
        <button type="button" onClick={reset}>Reset</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewBookForm',
  validate: formValidations.createValidator({
    firstname: formValidations.required,
    lastname: formValidations.required,
    email: [formValidations.required, formValidations.email],
  })
})(
  connect(null, { createOrder })(BookForm)
);

// form will only render children form components
// it will probably handle the app state connected to redux
