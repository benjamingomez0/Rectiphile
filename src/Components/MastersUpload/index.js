import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 
import { render } from '@testing-library/react';
import './masters-upload-style.css'
import {doAddFile} from '../../firebase/firebase'
import axios from 'axios';

class MastersUpload extends Component{
    state=
    {
        name:'',
        file:null,
        versions:[]
    }
     handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
          })
          console.log(this.state)
    }
    handleFileChange=(e)=>{
        this.setState({
            file:e.target.files[0]
        })
        
    }
    handleSubmit= async (e)=>
    {
      e.preventDefault()

      doAddFile(this.state.file)
        .then(file => file.ref.getDownloadURL())
        .then(async url => {
            const data = {
                user_id:this.props.currentUser.uid,
                masterFile:url,
                versions:this.state.versions,
                name:this.state.name
            }
            const stuff = await fetch('/uploads/master', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        
        })
    //   axios.post("http://localhost:8000/uploads/master", data)
        // cons st('/uploads/master',data, config);
    }
    render(){
        return(
            <React.Fragment>
                <div className="upload-container">
                    <div className="upload-message">
                        Drag Master
                        <br/>
                        Document Here...
                        <br/>
                        or upload below
                        <br/>
                        <br/>
                        <span className = "sub-text">Future Versions will be compared against this document</span>
                    </div>
                </div>
                <div className="form-holder">
                    <form className="form" onSubmit={this.handleSubmit}> 
                        Name of master:  <input type = "text" name = "name" onChange={this.handleChange}/>
                        <br/>
                        File:  <input type="file" name= "file" onChange={this.handleFileChange}/>
                        <br/>
                        <button type= "submit">upload</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default MastersUpload


