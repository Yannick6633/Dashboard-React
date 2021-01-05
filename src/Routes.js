import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/login/login";
import Home from "./containers/Home/Home"
import LoginPage from "./containers/LoginPage/LoginPage";
import Clock from "./containers/Clock/Clock";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default function Routes() {
    return (
        <Switch>

            <UnauthenticatedRoute exact path="/">
                <Home />
            </UnauthenticatedRoute>

            <UnauthenticatedRoute  exact path="/login">
                <Login />
            </UnauthenticatedRoute >

            <AuthenticatedRoute  exact path="/loginPage">
                <LoginPage />
            </AuthenticatedRoute >

            <AuthenticatedRoute  exact path="/clock">
                <Clock />
            </AuthenticatedRoute >

        </Switch>
    );
}
