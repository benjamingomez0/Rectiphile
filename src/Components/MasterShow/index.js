import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Master-Show-Style.css'
import {doAddFile} from '../../firebase/firebase'
class MasterShow extends Component{
    state = {
        master:{},
        version:{},
        displayForm:false,
        name:'',
        file:'',
        differences:'',
        key:''
    }
    async componentDidMount(){
        const getMaster = await fetch(`/docs/masters/${this.props.match.params.id}`)

        const parsedMaster = await getMaster.json();
        this.setState({
            master:parsedMaster
        })
        
    }
    
    handleSubmit= async (e)=>
    {
      e.preventDefault()
      doAddFile(this.state.file)
        .then(file => file.ref.getDownloadURL())
        .then(async url => {
            const data = {
                versionFile:url,
                master:this.state.master._id,
                name:this.state.name,
                differences:this.state.differences
            }
          const createTheVersion = await fetch('/uploads/version', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
            
        })
        if(createTheVersion.status==200)
        {
            console.log(this.props)
            this.props.history.push(`/auth/users/${this.props.currentUser.uid}`)
        }
        
        })
    }

    handleClick=(e)=>{
        this.setState({
            displayForm:!this.state.displayForm
        })
    }
    handleChange = e =>
        this.setState({
            [e.target.name]: e.target.value
        })
    handleFileChange=(e)=>{
        console.log(e.target.files[0],"<== this is the file")
        this.setState({
            file:e.target.files[0]
        })
    }
    render(){
        console.log(this.state.master.versions)
            return(
                
                <div className ="master-container">
                    <h1>{this.state.master.name}</h1>
                    Download Master
                    <br/>
                   <a href = {this.state.master.masterFile}>Master</a>
                    <h3>Date Created:</h3>
                    {new Date(this.state.master.dateCreated).toDateString()}
                    <h3>Versions Available</h3>
                    {
                        this.state.master.versions ?
                        this.state.master.versions.map((vers,i) => {
                            return (
                                <Link to={`/docs/versions/${vers}`}> <div> Version {i+1} </div> </Link>  
                            )
                        }) : ''
                    }
                    <br/>
                    {
                        this.props.currentUser?
                        <button onClick={this.handleClick}>Add Version</button>
                        :null
                    }
                    
                    {this.state.displayForm&&this.props.currentUser?
                    <form className='version-form' onSubmit={this.handleSubmit}>
                        Version Name:<input type="text" name= "name" onChange={this.handleChange}/>
                        <br/>
                        Version File:<input type="file" name= "file" onChange={this.handleFileChange}/>
                        <br/>
                        Enter Any Differences:<br/>
                        <input type="textarea" name= "differences" onChange={this.handleChange} id="text-area"/>
                        <br/>
                        Key:<input type="text" name= "key" onChange={this.handleChange}/>
                        <br/>
                        {
                            this.state.key===this.state.master.key?
                            <button type ="submit" className="submit-btn" >Submit Version</button>
                            :null
                        }
                        
                    </form>
                    :null
                    
                }
                </div>
            )
        }

}

export default MasterShow