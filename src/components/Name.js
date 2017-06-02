import React from 'react';
import { Field } from 'redux-form';

const Name = (props) => {
  // console.log('props in Name', props);

const renderField = (field) => {
    console.log('field in renderField()', field);
    return (
      <div className="input-row">
        <label>{field.label}</label>
        <input {...field.input} type={field.type}/>
      </div>
    );
  };

  return (
      <div className="Name">
        <Field name="firstname" label="First Name" type="text" component={renderField} />
        <Field name="lastname" label="Last Name" type="text" component={renderField} />
        <Field name="email" label="Email" type="email" component={renderField} />
      </div>
  );
};
export default Name;
