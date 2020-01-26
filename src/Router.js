import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/dashboard" component={Dashboard} />
                    {/*<Redirect from="/" to="/dashboard" />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;



