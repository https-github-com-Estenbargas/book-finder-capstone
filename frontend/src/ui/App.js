import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import "./App.css"
import {MainNav} from "./shared/components/NavBar";
import {ProfilePage} from "./user-profile/Profile";
import {Details} from "./Details/Details";

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user-profile' component={ProfilePage} />
                <Route exact path='/details-page' component={Details} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
