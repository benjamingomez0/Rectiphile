import React, { Component } from 'react'
import {doSignInWithGoogle} from '../../firebase/firebase'

class GoogleSignIn extends Component
{
    state = { 
        error: null 
    }
    handleSubmit=(e)=>{
        doSignInWithGoogle().catch(error => {
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