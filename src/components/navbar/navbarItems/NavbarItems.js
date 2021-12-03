import React from 'react'
import './NavbarItems.css'

function NavbarItems() {
    return (
        <div className= "NavbarItems">
            <a href='https://www.thejo.cl/'><span>INICIO</span> </a>
            <a href='https://www.thejo.cl/acerca-de-thejo'><span> ACERCA DE</span> </a>
            <a href='https://www.thejo.cl/about-3'> <span>CERTIFICACIONES</span> </a>
            <a href='https://www.thejo.cl/investigación-y-desarrollo'> <span>INVESTIGACIÓN Y DESARROLLO </span></a>
            <a href='https://www.thejo.cl/productos'> <span>PRODUCTOS </span></a>
            <a id="lastone" href='https://www.thejo.cl/contacto'> <span>CONTACTO</span></a>
        </div>
    )
}

export default NavbarItems
