import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Auth.sass'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, setCurrentUser } from '../../../reducers/usersReduser'

const SignUp = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const errorMessagesSignUp = useSelector(state => state.users.errorMessagesSignUp)
  const history = useHistory()

  const submit = (values) => {
    const user = {}
    const isUser = users.find(item => item.email === values.email)

    if(!isUser) {
      user.name = values.name
      user.secondName = values.secondName
      user.email = values.email
      user.password = values.password

      dispatch(setAuth(true))
      dispatch(setCurrentUser(user.name))
      users.push(user)
      history.push('/');
    } else {
      alert(errorMessagesSignUp)
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(6, 'Must be at least 6 characters long.')
      .required('Name is required'),
    secondName: Yup.string()
      .min(6, 'Must be at least 6 characters long.')
      .required('Second name is required'),
    password: Yup.string()
      .typeError('Should be a string')
      .min(6, 'Must be at least 6 characters long.')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password mismatch')
      .required('Confirm password is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  })

  return (
    <Formik
      initialValues={{
        name: '',
        secondName: '',
        password: '',
        confirmPassword: '',
        email: ''
        }}
        validateOnBlur
        onSubmit={submit}
        validationSchema={validationSchema}
    >
      {({resetForm}) => (
        <div className="form-wrap">
          <h2 className="form-wrap__title">Registration</h2>
          <Form className="form">
            <div className="form-field">
              <label htmlFor="name" className="form-field__name">Name:</label>
              <Field name="name" type="text" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="name" /></span>
            </div>
            <div className="form-field">
              <label htmlFor="secondName" className="form-field__name">Second name:</label>
              <Field name="secondName" type="text" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="secondName" /></span>
            </div>
            <div className="form-field">
              <label htmlFor="password" className="form-field__name">Password:</label>
              <Field name="password" type="password" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="password" /></span>
            </div>
            <div className="form-field">
              <label htmlFor="confirmPassword" className="form-field__name">Confirm password:</label>
              <Field name="confirmPassword" type="password" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="confirmPassword" /></span>
            </div>
            <div className="form-field">
              <label htmlFor="email" className="form-field__name">Email:</label>
              <Field name="email" type="email" className="form-field__input"/>
              <span className="form-field__error"><ErrorMessage name="email" /></span>
            </div>
            <div className="form-btns">
              <button
                type="submit"
                className="btn form__btn"
              >Sign up</button>
              <button
                type="button"
                onClick={() => resetForm()}
                className="btn secondary form__btn"
              >Clear</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;