import React, { Component } from 'react';
import Name from '../components/Name';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createBook } from '../actions';

console.log('in BookForm');

class BookForm extends Component {
  render () {
    return (
      <form className="book-form">
        <Name />
      </form>
    );
  }
}

export default reduxForm({
  form: 'NewBookForm'
})(
  connect(null, { createBook })(BookForm)
);

// form will only render children form components
// it will probably handle the app state connected to redux
