import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Auth.sass'
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .typeError('Should be a string')
      .min(6, 'Must be at least 6 characters long.')
      .required('Password is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  })

  return (
    <Formik
      initialValues={{
        password: '',
        email: ''
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationSchema}
    >
      {() => (
        <div className="form-wrap">
          <h2 className="form-wrap__title">Sign in</h2>
          <Form className="form">
            <div className="form-field">
              <label htmlFor="email" className="form-field__name">Email:</label>
              <Field name="email" type="email" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="email" /></span>
            </div>
            <div className="form-field">
              <label htmlFor="password" className="form-field__name">Password:</label>
              <Field name="password" type="password" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="password" /></span>
            </div>
            <div className="form-btns">
              <button 
                type="submit"
                // disabled={!(isValid && dirty)}
                className="form__btn"
              >Sign in</button>
              <NavLink to={`/signUp`} className="form__btn">
                Registration
              </NavLink>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;