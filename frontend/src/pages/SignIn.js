import React, { useState } from 'react'
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
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
const Message = styled.p`
  color: #5D5D5D;
  text-align: center;
`
const Credit = styled.a`
  color: #5D5D5D;
  font-size: 10px;
`

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
          throw new Error('Unable to sign in.')
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
    <Container>
      <Image />
      <Content>
        <Title>Sign in.</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            E-mail
        <input type='email' required value={signInValues.email} onChange={event => setSignInValues({ ...signInValues, email: event.target.value })} />
          </Label>
          <Label>
            Password
        <input type='password' required minLength='4' value={signInValues.password} onChange={event => setSignInValues({ ...signInValues, password: event.target.value })} />
          </Label>
          <div>
            <Button
              buttonText='Sign In'
              backgroundColor='#F86AB0'
              color='#5D5D5D'
              borderProperties='solid 2px #5D5D5D'
              width='120px'
              fontFamily='"Varela Round", sans-serif'
            />
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
          </div>
          {error && <Message>{error}</Message>}
        </Form>
        <Credit href='https://www.freepik.com/free-photos-vectors/business'>Image by rawpixel at freepick</Credit>
      </Content>
    </Container>
  )
}