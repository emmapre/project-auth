import React from 'react'
import { Button } from 'lib/Button'

export const SignIn = () => {

  return (
    <form>
      <label>
        E-mail
        <input></input>
      </label>
      <label>
        Password
        <input></input>
      </label>
      <Button
        buttonText="Sign In"
        backgroundColor="lightblue"
        borderProperties="solid 1px black"
        width="120px"
      />
    </form>

  )



}