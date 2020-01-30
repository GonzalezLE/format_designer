import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import {Provider} from 'react-redux'
//import Login from './pages/login';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/" component={Login}/>*/}
                    <Route exact path="/" component={Dashboard} />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;



