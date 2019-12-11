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
                ? <div><NavLink to = {`${ROUTES.UPLOAD}/masters`}>Upload Master</NavLink>
                <br/>
                <NavLink to = {`${ROUTES.USER}/users/${props.currentUser.uid}`}> My Masters</NavLink> 
               
                </div>
                :<NavLink to = {ROUTES.REGISTER}>Register/Login</NavLink>
            }
            </div>
            <div className="middle">
            </div>
            <div className="nav-bar-right">
                <NavLink to = {`${ROUTES.HOME}`}>Home</NavLink>
                <br/>
                {
                props.currentUser?<div className="home-login">
                <a onClick={doSignOut}>Logout</a>
                </div>
                :null
                }
            </div>
        </div>
    )


}

export default Nav