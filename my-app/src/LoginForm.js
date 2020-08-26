import React from 'react'
import { Button, Form, FormGroup, Label, Input }
  from 'reactstrap';

export default function LoginForm(props) {
  const {
    values,
    submit,
    inputChange,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  return (
    <Form className='form-container' onSubmit={onSubmit}>
      <div className='form-inputs'>
        <FormGroup>
        <Label>Name</Label>
          <Input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
            placeholder='Name'
          />
        </FormGroup>
        <FormGroup>
        <Label>Email</Label>
          <Input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='email'
            placeholder='Email'
          />
        </FormGroup>
        <FormGroup>
        <Label>Password</Label>
          <Input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
            placeholder='Password'
          />
        </FormGroup>
        </div>
        <div className='form-login-button'>
            <Button className='btn-lg btn-dark btn-block' disabled={disabled}>Login</Button>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
        </div>
    </Form>
  )
}
