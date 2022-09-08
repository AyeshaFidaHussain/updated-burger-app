import React, { useState } from 'react'

import { Button } from '../components'

import './login.css'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const handleChange = e => {
    if (e.target.name === 'email')
    {
      setFormData({ ...formData, email: e.target.value })
    } else setFormData({ ...formData, password: e.target.value })
  }
  return (
    <div className='my-form'>
      <input
        type='email'
        placeholder='example123@gmail.com'
        name='email'
        maxLength='30'
        required
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='Enter password'
        name='password'
        maxLength='6'
        required
        onChange={handleChange}
      />
      <Button buttonVal='SUBMIT' className='submit' />
      <Button buttonVal='SIGN IN' className='signin' />
    </div>
  )
}
export default Login
