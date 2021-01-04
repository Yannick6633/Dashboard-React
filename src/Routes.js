import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/login/login";
import Home from "./containers/Home/Home"

export default function Routes() {
    return (
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

        </Switch>
    );
}
