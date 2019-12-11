import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../view/home'

export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    );
}