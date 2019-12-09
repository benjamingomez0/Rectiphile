import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {doSignInWithGoogle} from '../../firebase/firebase'
import './Google-Sign-In-style.css'
import * as ROUTES from '../../Constants/routes'

class GoogleSignIn extends Component
{
    state = { 
        error: null 
    }
    handleSubmit=(e)=>{
        doSignInWithGoogle()
        .then(async (authUser)=>{
            console.log(authUser)
            const user = {
                _id:authUser.user.uid,
                email:authUser.user.email,
                displayName: authUser.user.displayName
            }
            const createdUser = await fetch('/auth/users/new', {
                method:"POST",
                body:JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                  },
            })
            const createdUserJson = await createdUser.json()
            console.log(createdUserJson)
        })
        .catch(error => {
              this.setState({ error });
            });
          e.preventDefault();
    }
    render()
    {
        const{error}=this.state
        return(
            <div className = "create-user">
                Register with Google
                <form onSubmit = {this.handleSubmit}>
                <button type = "submit"> Use Google to Register </button>
                    {error && <span className="error-message">We're Sorry, {error.message}</span>}
                </form>
                <Link to = {ROUTES.HOME}> home</Link>
            </div>
        )
    }

}

export default GoogleSignIn