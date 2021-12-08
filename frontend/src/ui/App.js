import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home/Home'
import { Signup } from './Signup/Signup'
import { FourOhFour } from './FourOhFour'
import {ProfilePage} from "./user-profile/Profile";
import {LoginPage} from "./login/Login";
import {UserList} from "./UserList/UserList";
import {Details} from "./Details/Details";
import {Library} from "./library-page/Library";
import React from 'react'
import {Provider} from "react-redux";
import "./App.css"
import {MainNav} from "./shared/components/NavBar";

export const App = (store) => (

    <>
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/user-profile' component={ProfilePage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/user-list' component={UserList} />
                <Route exact path='/details-page/:bookId' component={Details} />
                <Route exact path='/library' component={Library}/>
                <Route exact path='/sign-up' component={Signup} />
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>
    </Provider>
    </>
)
