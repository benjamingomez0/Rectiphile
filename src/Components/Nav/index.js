import React from 'react'
import {NavLink} from 'react-router-dom'
import * as ROUTES from '../../Constants/routes'
import './nav-style.css'

const Nav = () =>{
    return(
        <div className="nav-bar">
            <NavLink to = {ROUTES.REGISTER}>Register</NavLink>
        </div>
    )


}

export default Nav