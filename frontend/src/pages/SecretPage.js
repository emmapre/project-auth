import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'lib/Button'
import padlocks from '../assets/15586.jpg'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`
const Image = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${padlocks});
  background-size: cover; 
  background-position: center center; 

  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 50vh;
  
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`
const Title = styled.h1`
  color: #5D5D5D;
  font-family: 'Varela Round', sans-serif;
  text-align: center;
`
const Credit = styled.a`
  color: #5D5D5D;
  font-size: 10px;
`

export const SecretPage = () => {
  const url = 'https://find-emmas-secrets.herokuapp.com/secrets'
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    history.push('/')
  }

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
    <Container>
      <Image />
      <Content>
        {message &&
          <>
            <Title>{message}</Title>
            <Button
              onClick={handleSignOut}
              buttonText='Sign out'
              backgroundColor='#F8EAD7'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              color='#5D5D5D'
              fontFamily='"Varela Round", sans-serif'
            />
          </>
        }
        {error &&
          <>
            <Title>{error}</Title>
            <Link to='/'>
              <Button
                buttonText='Go back'
                backgroundColor='#F8EAD7'
                borderProperties='solid 2px #5D5D5D'
                width='120px'
                color='#5D5D5D'
                fontFamily='"Varela Round", sans-serif'
              />
            </Link>
          </>
        }
        <Credit href='https://www.freepik.com/free-photos-vectors/business'>Image by rawpixel at freepick</Credit>
      </Content>
    </Container>
  )
}
