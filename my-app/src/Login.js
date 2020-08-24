import React, { useState, useEffect } from 'react'
import LoginDetails from './LoginDetails'
import LoginForm from './LoginForm'
import formSchemaLogin from './formSchemaLogin'
import axios from 'axios'
// import * as yup from 'yup'


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
  
  
  export default function Order() {
    const [loginDetails, setLoginDetails] = useState(initialLoginDetails)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
  
    const postNewLoginDetails = newLoginDetails => {
      axios.post('https://reqres.in/api/pizzas', newLoginDetails)
        .then(res => {
          setLoginDetails([...loginDetails, res.data])
        })
        .catch(err => {
          return err
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }
  
    // const inputChange = (name, value) => {
    //   yup
    //     .reach(formSchema, name)
    //     .validate(value)
    //     .then(valid => {
    //       setFormErrors({
    //         ...formErrors,
    //         [name]: "",
    //       })
    //     })
    //     .catch(err => {
    //       setFormErrors({
    //         ...formErrors,
    //         [name]: err.errors[0],
    //       })
    //     })
  
    //   setFormValues({
    //     ...formValues,
    //     [name]: value
    //   })
    // }
  
    const submit = () => {
      const newLoginDetails = {
        name: formValues.name.trim(),
        email: formValues.name.trim(),
        password: formValues.name.trim(),
        confirm: formValues.name.trim(),
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
  
        {
          loginDetails.map(loginDetails => {
            return (
              <LoginDetails key={loginDetails.id} details={loginDetails} />
            )
          })
        }
      </div>
    )
  }
  