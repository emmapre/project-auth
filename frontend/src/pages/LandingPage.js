import React from 'react'
import { Button } from 'lib/Button'


export const LandingPage = () => {

  return (
    <div>
      <Button
        buttonText="Sign Up"
        backgroundColor="pink"
        borderProperties="solid 1px black"
        width="120px"
      />
      <Button
        buttonText="Sign In"
        backgroundColor="lightblue"
        borderProperties="solid 1px black"
        width="120px"
      />
    </div>
  )
}