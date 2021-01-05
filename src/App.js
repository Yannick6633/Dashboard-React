import React, { useState } from 'react';
import Routes from "./Routes"
import { AppContext } from "./libs/contextLib";
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import {useHistory} from "react-router-dom";



function App() {

    const history = useHistory();

    async function handleLogout() {
        await userHasAuthenticated();

        userHasAuthenticated(false);

        history.push("/login");
    }

    const [isAuthenticated, userHasAuthenticated] = useState(false);
    return (
        <div className="App container py-3">
            <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
                <LinkContainer to="/">
                    <Navbar.Brand className="font-weight-bold text-muted">
                        Massive
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav activeKey={window.location.pathname}>
                        {isAuthenticated ? (
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        ) : (
                            <>
                                <LinkContainer to="/">
                                    <Nav.Link>Back</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                <Routes />
            </AppContext.Provider>
        </div>
    );
}

export default App;
