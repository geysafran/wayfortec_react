import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../view/home'
import Login from '../view/login/login'
import sobre from '../view/sobre/sobre'


export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/sobre' component={sobre}/>
        </Switch>
    );
}