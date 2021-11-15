import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Library} from "./library-page/Library";
import "./App.css"
import {MainNav} from "./shared/components/NavBar";


export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/library' component={Library}/>
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)
