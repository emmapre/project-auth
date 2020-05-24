import React from 'react'
import { Button } from 'lib/Button'

export const SignUp = () => {

  return (
    <form>
      <label>
        Name
        <input></input>
      </label>
      <label>
        E-mail
        <input></input>
      </label>
      <label>
        Password
        <input></input>
      </label>
      <Button
        buttonText="Sign Up"
        backgroundColor="pink"
        borderProperties="solid 1px black"
        width="120px"
      />
    </form>

  )



}