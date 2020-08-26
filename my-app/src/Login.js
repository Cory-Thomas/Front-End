import React, { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import axios from 'axios'
import formSchemaLogin from './FormSchemaLogin'
import * as yup from 'yup'


const initialFormValues = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  }
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  }
  const initialLoginDetails = []
  const initialDisabled = true
  
  
  export default function Login(props) {
     const {setLoggedInUser} = props;

    const [loginDetails, setLoginDetails] = useState(initialLoginDetails)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    const postNewLoginDetails = newLoginDetails => {
      axios.post('https://reqres.in/api/logindetails', newLoginDetails)
        .then(res => {
          setLoginDetails([...loginDetails, res.data])
        })
        .catch(err => {
          return err
        })
        .finally(() => {
          setLoggedInUser(newLoginDetails);
        })
    }
  
    const inputChange = (name, value) => {
      yup
        .reach(formSchemaLogin, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          })
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          })
        })
  
      setFormValues({
        ...formValues,
        [name]: value
      })
    }
  
    const submit = () => {
      const newLoginDetails = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
      }
      postNewLoginDetails(newLoginDetails)
    }
  
    useEffect(() => {
      formSchemaLogin.isValid(formValues)
        .then(valid => {
          setDisabled(!valid);
        })
    }, [formValues])
  
    return (
      <div className='container'>
        <header><h1>Expat Journal Login</h1></header>
        <LoginForm
          values={formValues}
          inputChange={inputChange}
          submit={submit}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
    )
  }
  