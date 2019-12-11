import React, {Component} from 'react'
import './Version-Show-Style.css'

class VersionShow extends Component{
    state = {
        version:{}
    }
    async componentDidMount(props){
        const getVersion = await fetch(`/docs/versions/${this.props.match.params.id}`)

        const parsedVersion = await getVersion.json();
        this.setState({
            version:parsedVersion
        })
        
    }
    async handleDelete(){
        const delVersion = await fetch(`/${this.props.match.params.id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'}
            
        })

    }
    render(){
            return(
                
                <div className ="version-container">
                    <h1>{this.state.version.name}</h1>
                    Download Version
                    <br/>
                   <a href = {this.state.version.versionFile}>Version</a>
                    <h3>Date Created:</h3>
                    {this.state.version.dateCreated}
                    <h3>Differences</h3>
                    {this.state.version.differences}
                    {
                        this.props.currentUser?
                        <div className="deleteBtn" onClick ={this.handleDelete}>Delete</div>
                        :null
                    }
                </div>
            )
        }

}

export default VersionShow