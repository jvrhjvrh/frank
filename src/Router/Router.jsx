import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './../Pages/Login';
import Home from './../Pages/Home';

const Router = () =>(
    <div style={{height:'100%',width:'100%'}}>
        <Switch>
            <Route path="/home" component={Home} exact />
            <Route component={Login}/>
        </Switch>
    </div>
);

export default Router;