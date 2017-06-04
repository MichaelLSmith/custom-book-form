const validate = values => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length > 15 ) {
      errors.firstname = 'Must be 15 characters or less';
    }

    if (!values.lastname) {
      errors.lastname = 'Required'
    } else if (values.lastname.length > 15) {
      errors.lastname = 'Must be 15 characters or less';
    }
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

	export { validate };