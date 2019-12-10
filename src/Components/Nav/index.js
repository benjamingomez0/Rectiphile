import React from 'react'
import {NavLink} from 'react-router-dom'
import * as ROUTES from '../../Constants/routes'
import {doSignOut} from '../../firebase/firebase'
import './nav-style.css'

const Nav = (props) =>{
    return(
        <div className="nav-bar">
            <div className="nav-bar-left">
            {
                props.currentUser
                ? <NavLink to = {`${ROUTES.UPLOAD}/masters`}>Upload New Master</NavLink>
                :<NavLink to = {ROUTES.REGISTER}>Register/Login</NavLink>
            }
            </div>
            <div className="nav-bar-right">
                <NavLink to = {ROUTES.HOME}>Home</NavLink>
                <a onClick={doSignOut}>Logout</a>
            </div>
        </div>
    )


}

export default Nav