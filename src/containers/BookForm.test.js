/* 
we care that form renders all its children 
we care that two buttons are rendered: 
  1. Clear 
  2. Submit 
when "clear" button is pressed, all data is cleared from children 
when "submit" button is pressed, all data is cleared from children && data is saved to store through redux form 
 
we will care how it works with redux-form and submittal 
*/ 
import React from 'react';
import { shallow } from 'enzyme';
import BookForm from './BookForm';

let component;

describe('Book Form renders a form and children', () => {
	it('renders a form with class book-form', () => {
		component = shallow(<BookForm />);
		expect(component.find('div.Name'));
	});
});

