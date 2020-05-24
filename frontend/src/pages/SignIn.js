import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'lib/Button'

export const SignIn = () => {
  const url = 'http://localhost:8080/sessions'
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // const [message, setMessage] = useState('')


  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      }
    )

      .then(res => {
        if (!res.ok) {
          throw new Error("Unable to sign-in")
        }
        res.json().then(data => {
          if (data.notFound !== true) {
            localStorage.setItem('accessToken', data.accessToken)
            history.push('/secretpage')
          }
        })
      })

      // .then(({ accessToken }) => {
      //   if (accessToken) {
      //     window.localStorage.setItem('accessToken', accessToken)
      //     history.push('/secretpage')
      //   }
      // })
      .catch((err) => {
        setError(err.message)
      })
      .then(() => {
        setEmail('')
        setPassword('')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail
        <input type='email' required value={email} onChange={event => setEmail(event.target.value)} />
      </label>
      <label>
        Password
        <input type='password' required minLength='4' value={password} onChange={event => setPassword(event.target.value)} />
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