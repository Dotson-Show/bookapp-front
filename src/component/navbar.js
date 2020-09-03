import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink}  from  'reactstrap'

const NavBar = ()  => {
    return(
        <div>
            <Navbar color="light" light expand="md">
                <div>
                    <NavbarBrand href="/" className="container">
                        <strong>My Books</strong>
                    </NavbarBrand>
                </div>
                <Nav className="ml-auto">
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar