import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Master-Show-Style.css'

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
    
    // handleSubmit= async (e)=>
    // {
    //   e.preventDefault()
    // //   reader = new FileReader();

    //   doAddFile(this.state.file)
    //     .then(file => file.ref.getDownloadURL())
    //     .then(async url => {
    //         const data = {
    //             userLeader:this.props.currentUser.uid,
    //             masterFile:url,
    //             versions:this.state.versions,
    //             name:this.state.name,
    //             key:this.state.key
    //         }
    //       const createTheMaster = await fetch('/uploads/master', {
    //       method: 'POST',
    //       body: JSON.stringify(data),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
            
    //     })
    //     if(createTheMaster.status==200)
    //     {
    //         console.log(await createTheMaster.json(),"<<<< master upload success message")
    //         console.log(this.props)
    //         this.props.history.push(`/auth/users/${this.props.currentUser.uid}`)
    //     }
        
    //     })
    // }

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
        console.log(e.target.files[0],"<== file")
        this.setState({
            file:e.target.files[0]
        })
    }
    render()
        {
            return(
                <div className ="master-container">
                    <h1>{this.state.master.name}</h1>
                    <Link to = {this.state.master.masterFile}>Download Master</Link>
                    <h3>Date Created:</h3>
                    {this.state.master.dateCreated}
                    <h3>Versions Available</h3>
                    {
                    this.state.master.versions?
                    this.state.master.versions.length
                    :0
                    }
                    <br/>
                    <br/>
                    <button onClick={this.handleClick}>Add Version</button>
                    
                    {this.state.displayForm&&this.props.currentUser?
                    <form className='version-form'>
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
                            <button type ="submit" className="submit-btn">Submit Version</button>
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