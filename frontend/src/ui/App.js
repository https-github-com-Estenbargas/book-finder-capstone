import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import "./App.css"
import {MainNav} from "./shared/components/NavBar";
import {UserList} from "./UserList/UserList";


export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user-list' component={UserList} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
