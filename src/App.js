import React, {Component} from 'react'
import { BrowserRouter as Router } from 'react-router-dom'; 
import {Route,Switch, withRouter} from 'react-router-dom'

//components
import Nav from './Components/Nav'
import GoogleSignIn from './Components/GoogleSignIn'
import MastersUpload from './Components/MastersUpload'
import UserShow from './Components/UserShow'
import MasterShow from './Components/MasterShow'
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
    // console.log(this.state, '<==== current user')
  }
  

  render(){
    return (
      <div>
        <div className="App">
        <Router>
          <Nav currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = {ROUTES.REGISTER} component = {GoogleSignIn}/>
          <Route path = {ROUTES.UPLOAD} render ={(props)=> <MastersUpload currentUser = {this.state.currentUser} {...props} />} />
          <Route exact path= {`${ROUTES.USER}/users/:id`} render ={(props)=> <UserShow currentUser = {this.state.currentUser} {...props}/>}/>
          <Route exact path= {`${ROUTES.DOCS}/masters/:id`} render ={(props)=> <MasterShow currentUser = {this.state.currentUser} {...props}/>}/>
        </Switch>
        </Router>
        </div>
      </div>
    )
  }
}

export default App;
