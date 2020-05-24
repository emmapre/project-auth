import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Button'


export const LandingPage = () => {

  return (
    <div>
      <Link to='/signup'>
        <Button
          buttonText="Sign Up"
          backgroundColor="pink"
          borderProperties="solid 1px black"
          width="120px"
        />
      </Link>
      <Link to='/signin'>
        <Button
          buttonText="Sign In"
          backgroundColor="lightblue"
          borderProperties="solid 1px black"
          width="120px"
        />
      </Link>
    </div>
  )
}