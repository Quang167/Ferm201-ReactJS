import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavbarHeader = () => {
    return (
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default NavbarHeader