// UI Test == Remember this is instead of rendering it to the DOM. So the test
// needs to see what will be rendered to the DOM. we care that it renders 3
// groups of a label and an input. we care that each label has correct text


// REDUX/DATA Test we care that each field component returns data correctly
// named and formated.


import React from 'react';
import Name from './Name';
import { shallow } from 'enzyme';

let component;

describe('Name renders 3 Fields', () => {
  beforeEach(() => {
   component = shallow(<Name />);
  });

  it('FirstName labeled: First Name', () => {
    expect(component.contains(<label>First Name</label>));
  });
  it('LastName labeled: Last Name', () => {
    expect(component.contains(<label>Last Name</label>));
  });
    it('Email labeled: Email', () => {
    expect(component.contains(<label>Email</label>));
  });
});
