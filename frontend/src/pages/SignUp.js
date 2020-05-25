import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'

export const SignUp = () => {
  const url = 'http://localhost:8080/users'
  const [signUpValues, setSignUpValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpValues)
      }
    ).then(res => {
      if (!res.ok) {
        throw new Error("Unable to sign up.")
      }
      res.json()
    })
      .catch((err) => {
        setError(err.message)
      })
      .then(() => {
        setSuccess(`Registry done for ${signUpValues.name}.`)
        setSignUpValues({
          name: '',
          email: '',
          password: ''
        })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' value={signUpValues.name} onChange={event => setSignUpValues({ ...signUpValues, name: event.target.value })} />
      </label>
      <label>
        E-mail
        <input type='email' required value={signUpValues.email} onChange={event => setSignUpValues({ ...signUpValues, email: event.target.value })} />
      </label>
      <label>
        Password
        <input type='password' required minLength='4' value={signUpValues.password} onChange={event => setSignUpValues({ ...signUpValues, password: event.target.value })} />
      </label>
      <Button
        type="submit"
        buttonText="Sign Up"
        backgroundColor="pink"
        borderProperties="solid 1px black"
        width="120px"
      />
      <Link to='/'>
        <Button
          buttonText="Go back"
          backgroundColor="palegreen"
          borderProperties="solid 1px black"
          width="120px"
        />
      </Link>
      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </form>

  )



}