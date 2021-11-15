import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {LoginPage} from "./login/Login";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={LoginPage} />
                <Route component={FourOhFour} />

            </Switch>
        </BrowserRouter>

    </>
)
