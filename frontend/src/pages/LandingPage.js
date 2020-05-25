import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'
import padlocks from '../assets/15586.jpg'
import styled from 'styled-components/macro'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${padlocks});
  background-size: cover; 
  background-position: center center; 
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 100vh;
`
const Title = styled.h1`
  color: #5D5D5D;
  font-family: 'Varela Round', sans-serif;
`
const Credit = styled.a`
  color: #5D5D5D;
  font-size: 10px;
`

export const LandingPage = () => {

  return (
    <Container>
      <Image />
      <Content>
        <Title>Try finding the secret message.</Title>
        <div>
          <Link to='/signup'>
            <Button
              buttonText="Sign Up"
              backgroundColor="#00D3C2"
              color="#5D5D5D"
              borderProperties="solid 2px #5D5D5D"
              width="120px"
              fontFamily="'Varela Round', sans-serif"
            />
          </Link>
          <Link to='/signin'>
            <Button
              buttonText="Sign In"
              backgroundColor="#F86AB0"
              color="#5D5D5D"
              borderProperties="solid 2px #5D5D5D"
              width="120px"
              fontFamily="'Varela Round', sans-serif"
            />
          </Link>
        </div>
        <Credit href="https://www.freepik.com/free-photos-vectors/business">Image by rawpixel at freepick</Credit>
      </Content>
    </Container>
  )
}