import React, { Component } from 'react'
import {doSignInWithGoogle} from '../../firebase/firebase'

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
            const createdUser = await fetch('/auth/users', {
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
            <form onSubmit = {this.handleSubmit}>
               <button type = "submit"> Use Google to SignIn </button>
                {error && <span className="error-message">We're Sorry, {error.message}</span>}
            </form>
        )
    }

}

export default GoogleSignIn