import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Route,Switch} from 'react-router-dom'

//components
import Nav from './Components/Nav'
import GoogleSignIn from './Components/GoogleSignIn'

//firebase imports 
import {firebase,doAddFile,auth,doSignOut} from './firebase/firebase'

//routes imports
import * as ROUTES from './Constants/routes'
//css imports
import './App.css';


class App extends Component {
  state = {
    currentUser:{}
  }
  componentDidMount()
  {
    auth.onAuthStateChanged(authUser => {
      authUser
      ?this.doSetCurrentUser(authUser) 
      :this.setState({currentUser: null})
    })
  }
  
  doSetCurrentUser = currentUser =>{
    
    this.setState({currentUser})
    console.log(this.state, '<==== current user')
  }
  

  render(){
    return (
      <div>
        <div className="App">
        <Router>
          <Nav/>
          <Switch>
          <Route exact path = {ROUTES.LOGIN} component = {GoogleSignIn}/>
        </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default App;
