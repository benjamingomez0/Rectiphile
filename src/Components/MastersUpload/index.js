import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 
import './masters-upload-style.css'
import {doAddFile} from '../../firebase/firebase'
import { useDropzone } from "react-dropzone";


class MastersUpload extends Component{
    state=
    {
        name:'',
        file:null,
        versions:[],
        key:''
    }
    Dropzone = ({ onDrop, accept }) => {
        // Initializing useDropzone hooks with options
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
          onDrop,
          accept})
        }
     handleChange=(e)=>{
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
          })
    }
    handleFileChange=(e)=>{
        console.log(e.target.files[0],"<== file")
        this.setState({
            file:e.target.files[0]
        })
        
    }

    handleSubmit= async (e)=>
    {
      e.preventDefault()
    //   reader = new FileReader();

      doAddFile(this.state.file)
        .then(file => file.ref.getDownloadURL())
        .then(async url => {
            const data = {
                userLeader:this.props.currentUser.uid,
                masterFile:url,
                versions:this.state.versions,
                name:this.state.name,
                key:this.state.key
            }
          const createTheMaster = await fetch('/uploads/master', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
         
        })
        if(createTheMaster.status==200)
        {
            console.log(await createTheMaster.json(),"<<<< master upload success message")
            console.log(this.props)
            this.props.history.push(`/auth/users/${this.props.currentUser.uid}`)
        }
        
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="form-holder">
                    <form className="form" onSubmit={this.handleSubmit}> 
                        Name of master file:  <input type = "text" name = "name" onChange={this.handleChange}/>
                        <br/>
                        Choose a key for this file:<input type="text" name= "key" onChange={this.handleChange}/>
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


