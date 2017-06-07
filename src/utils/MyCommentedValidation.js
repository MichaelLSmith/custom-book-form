//based on https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/utils/validation.js


const isEmpty = value => value === undefined || value === null || value === '';



const join = (rules) => 
							//rules comes in as [].concat(rules[key]). It is combining/concatinating all the validation rules passed to the redux-form decorator function.
								(values, data) => 
								//values must come from the form's input fields
								//data??? I think comes from the Match validator??
										rules.map(rule => 
											rule(value, data)).filter(error => !!error[0 /* first error*/]);

export function required(value) {
	if(isEmpty(value)) {
		return 'Required';
	}
}

export function email(value) {
	if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		return 'Invalid Email Address';
	}
}

export function minLength(min) {
	return value => {
		if (!isEmpty(value) && value.length < min) {
			return 'Must be at least ${min} characters';
		}
	};
}

export function maxLength(max) {
	return value => {
		if (!isEmpty(value) && value.length > max) {
			return 'Must be no more than ${max} characters';
		}
	};
}

export function integer(value) {
	if (!Number.isInteger(Number(value))) {
		return 'Must be a valid Number';
	}
}

//not sure what these two do exactly. Kept them in in case I need them later.
export function oneOf(enumeration) {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function match(field) {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export function createValidator(rules) {
	return (data = {}) => {
		const errors = {};
		Object.keys(rules).forEach((key) => {
			const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
			const error = rule(data[key], data);
			if (error) {
				errors[key] = error;
			}
		});
		return errors;
	};
}