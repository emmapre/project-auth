import React, { useState } from 'react'
import { Button } from 'lib/Button'

export const SignUp = () => {
  const url = 'http://localhost:8080/users'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          name: name,
          email: email,
          password: password
        })
      }
    ).then(res => {
      res.json()
    })
      .then(() => {
        setName('')
        setEmail('')
        setPassword('')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' value={name} onChange={event => setName(event.target.value)} />
      </label>
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
        buttonText="Sign Up"
        backgroundColor="pink"
        borderProperties="solid 1px black"
        width="120px"
      />
      {/* <h3>{message}</h3> */}
    </form>

  )



}