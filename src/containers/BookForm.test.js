// we care that form renders all its children
// we will care how it works with redux-form and submittal

import React from 'react';
import shallow from 'enzyme';
import BookForm from './BookForm';

let component;

describe('Book Form renders a form and maybe children', () => {
	it('renders a form with class book-form', () => {
		component = shallow(<BookForm />);
	});
});

