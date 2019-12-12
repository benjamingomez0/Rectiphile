import React,{Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
class UserShow extends Component{
    state ={
        masterDocs:[{}]
    }
    async componentDidMount(){
        const getMasters = await fetch(`/auth/users/${this.props.match.params.id}`)
       
        const parsedMasters = await getMasters.json();
        this.setState({
            masterDocs : parsedMasters,
        })

    }
    render(){
        
            const userMasters= this.state.masterDocs.map((doc)=>{
               return( 
                    <Link to = {`/docs/masters/${doc._id}`} key={doc._id} className="card-container">
                        <div >
                            <div className="card">
                                <h2 >{doc.name}</h2>
                                <h3>Date Created:</h3>
                                <h4>{new Date(doc.dateCreated).toDateString()}</h4>
                                <h3>Versions Available:</h3>
                                <h4>{doc.versions?doc.versions.length:0}</h4>
                            </div>
                        </div>
                    </Link>
                )
            })
    return(
        <div className="mainDiv" style={{"margin-left": "10%"}}>
            {userMasters}
        </div>
    )
}

}

export default withRouter(UserShow)