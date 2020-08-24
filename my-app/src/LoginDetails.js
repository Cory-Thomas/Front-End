import React from 'react'

function LoginDetails({ details }) {
  if (!details) {
    return <h3>Stand by while we find your account...</h3>
  }

  return (
    <div className='login container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}

export default LoginDetails
