//we care that it renders the parent div with the class of "App"
//do we care that it renders it child? Or will the BookForm test worry about that?

import React from 'react';
import { mount, shallow, render } from 'enzyme';

import App from './App';
import { BookForm } from '../containers/BookForm';

describe('renders without error', () => {
  const component = shallow(<App />);
  it('parent div with App class', () => {
    expect(component.find('div.App'));
  });
  it('<form> with class of book-form', () => {
    expect(component.find('form.book-form'));
  });
});
