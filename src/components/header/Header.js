import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {

    return (
        <div className="header">
            <Navbar>
                <Navbar.Brand className="name" href="/">
                    To Do List
                </Navbar.Brand>
                <Nav className="names" className="nav">
                    <Nav.Link className="names" href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link className="names" href="/settings">
                        Settings{''}
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )


}
