import React from 'react'

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
    <form className='form container' onSubmit={onSubmit}>

      <div className='form-group inputs'>
        <h4>Login to Your Expat Journal Account</h4>
        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <br></br>
        <br></br>

        <label>Name:&nbsp;
          <input
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
          />
        </label>

        <br></br>
        <br></br>

        <label>Email:&nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='email'
          />
        </label>

        <br></br>
        <br></br>

        <label>Password:&nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='text'
          />
        </label>

        <br></br>
        <br></br>

        </div>

        <div className='form-group submit'>
            <br></br>
            <button className='submit-button' disabled={disabled}>Login</button>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.confirm}</div>
            </div>
        </div>

    </form>
  )
}
