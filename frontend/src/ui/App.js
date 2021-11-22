import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { Signup } from './Signup/Signup'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import "./App.css"
import {MainNav} from "./shared/components/NavBar";


export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/sign-up' component={Signup} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
