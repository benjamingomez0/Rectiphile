import React from 'react'
import {NavLink} from 'react-router-dom'
import * as ROUTES from '../../Constants/routes'
import {doSignOut} from '../../firebase/firebase'
import './nav-style.css'

const Nav = (props) =>{
    const {uid} = props
    return(
        
        <div className="nav-bar">
            <div className="nav-bar-left">
            {
                props.currentUser
                ? <NavLink to = {`${ROUTES.UPLOAD}/masters`}>Upload<br/>Master</NavLink>
                :<NavLink to = {ROUTES.REGISTER}>Register/Login</NavLink>
            }
            </div>
            <div className="middle">
            </div>
            <div className="nav-bar-right">
                {
                props.currentUser?<div className="home-login">
                <NavLink to = {`${ROUTES.USER}/users/${uid}`}>Home</NavLink> <br/><br/>
                <a onClick={doSignOut}>Logout</a>
                </div>
                :null
                }
            </div>
        </div>
    )


}

export default Nav