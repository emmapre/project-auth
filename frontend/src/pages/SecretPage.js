import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'lib/Button'


export const SecretPage = () => {
  const url = 'http://localhost:8080/secrets'
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    history.push('/')
  }

  /* const handleSecretPage =  */
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    fetch(url, {
      method: 'GET',
      headers: { 'Authorization': accessToken }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Access denied')
        }
        res.json().then(json => setMessage(json.secret))
      })
      .catch(err => {
        setError(err.message)
      })
  })



  return (
    <div>
      {message &&
        <>
          <h1>{message}</h1>
          <Button
            onClick={handleSignOut}
            buttonText="Sign out"
            backgroundColor="#F8EAD7"
            borderProperties="solid 2px #5D5D5D"
            width="120px"
            color="#5D5D5D"
            fontFamily="'Varela Round', sans-serif"
          />
        </>
      }
      {error &&
        <>
          <p>{error}</p>
          <Link to='/'>
            <Button
              buttonText="Go back"
              backgroundColor="palegreen"
              borderProperties="solid 1px black"
              width="120px"
            />
          </Link>
        </>
      }
    </div>
  )
}