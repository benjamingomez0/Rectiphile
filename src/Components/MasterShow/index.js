import React, {Component} from 'react'

class MasterShow extends Component{
    state = {
        master:{}
    }
    async componentDidMount(){
        const getMaster = await fetch(`/docs/masters/${this.props.match.params.id}`)

        const parsedMaster = await getMaster.json();
        this.setState({
            master:parsedMaster
        })
        
    }
    render()
        {
            return(
                <div className ="master-container">
                    <h1>{this.state.master.name}</h1>
                    <a href = "{this.state.master.masterFile}">Download Master</a>
                    <h3>Date Created:</h3>
                    {this.state.master.dateCreated}
                    <h3>Versions Available</h3>
                    {this.state.master.versions?this.state.master.versions.length:0}
                </div>
            )
        }

}

export default MasterShow