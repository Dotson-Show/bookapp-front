import React from 'react'
import {Navbar, NavbarBrand}  from  'reactstrap'

const NavBar = ()  => {
    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="container"><strong>My Books</strong></NavbarBrand> 
            </Navbar>
        </div>
    )
}

export default NavBar