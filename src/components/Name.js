import React from 'react';
import { Field } from 'redux-form';

const Name = () => {
  // console.log('props in Name', props);

const renderField = ( field ) => {
  // {input, label, type, meta: { touched, error } }
    // console.log(field);
    return (
      <div className="input-row">
        <label>{field.label}</label>
        <input {...field.input} type={field.type}/>
        <div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  };

  return (
      <div className="Name">
        <Field 
          name="firstname" 
          label="First Name" 
          type="text" 
          component={renderField} 
        />
        <Field 
          name="lastname" 
          label="Last Name" 
          type="text" 
          component={renderField} 
        />
        <Field 
          name="email" 
          label="Email" 
          type="email" 
          component={renderField} 
        />
      </div>
  );
};
export default Name;


/*Validation:
  1. Every input has data
  2. Email is a valid email
*/