import React,{Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import './homeStyle.css'
class AllMasters extends Component{
    state ={
        masterDocs:[{}],
    }
    async componentDidMount(){
        const getMasters = await fetch('/docs')
       
        const parsedMasters = await getMasters.json();
        this.setState({
            masterDocs:parsedMasters
        })
    }
    render()
    {
        
        const masters= this.state.masterDocs.map((doc)=>{
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
            
                this.props.currentUser
                ?<div className="mainDiv" style={{"margin-left": "10%"}}>
                {masters}
                </div>:
                <div className="homeInfo">
                <h1><u>Welcome to Rectiphile</u></h1>
                <div className="intro">A simple, easy to use tool that helps you rectify differences between different Excel Files. Login with your google account to get started</div>
                </div> 
            )
    }

}

export default withRouter(AllMasters)