import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage } from 'pages/LandingPage'
import { SignUp } from 'pages/SignUp'
import { SignIn } from 'pages/SignIn'
import { SecretPage } from 'pages/SecretPage'



export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/signup' exact>
          <SignUp />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/secretpage' exact>
          <SecretPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
