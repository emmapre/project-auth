import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'lib/Button'

export const SignIn = () => {
  const url = 'http://localhost:8080/sessions'
  const history = useHistory()
  const [signInValues, setSignInValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInValues)
      }
    )

      .then(res => {
        if (!res.ok) {
          throw new Error("Unable to sign in.")
        }
        res.json().then(data => {
          if (data.notFound !== true) {
            localStorage.setItem('accessToken', data.accessToken)
            history.push('/secretpage')
          }
        })
      })
      .catch((err) => {
        setError(err.message)
      })
      .then(() => {
        setSignInValues({
          email: '',
          password: ''
        })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail
        <input type='email' required value={signInValues.email} onChange={event => setSignInValues({ ...signInValues, email: event.target.value })} />
      </label>
      <label>
        Password
        <input type='password' required minLength='4' value={signInValues.password} onChange={event => setSignInValues({ ...signInValues, password: event.target.value })} />
      </label>
      <Button
        type="submit"
        buttonText="Sign In"
        backgroundColor="lightblue"
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
      {error && <p>{error}</p>}
    </form>
  )
}