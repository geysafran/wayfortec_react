import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Carousel from '../view/Carousel'

export default function Router(){
    return(
        <Switch>
            <Route exact path='/' component={Carousel}/>
        </Switch>
    );
}