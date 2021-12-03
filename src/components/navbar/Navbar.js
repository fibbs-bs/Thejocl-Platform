import React from 'react'
import './Navbar.css';
import NavbarItems from './navbarItems/NavbarItems';
import thejologogif from '../../sources/thejo.gif'


function Navbar() {
    return (
        <div className = "Navbar">
        
            <div className = "leftSide">
                <img src = {thejologogif} className = "logo" width='100' alt="aa"></img>
            </div>

            <div className = "rightSide">
                <NavbarItems></NavbarItems>
            </div>
            
        </div>
    )
}

export default Navbar
