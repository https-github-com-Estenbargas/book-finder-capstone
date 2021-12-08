import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Provider} from "react-redux";
import "./App.css"
import {MainNav} from "./shared/components/NavBar";
import {ProfilePage} from "./user-profile/Profile";
export const App = (store) => (
    <>
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user-profile' component={ProfilePage} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    </Provider>
    </>
)
