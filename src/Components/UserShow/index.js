import React,{Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
class UserShow extends Component{
    state ={
        masterDocs:[{}],
    }
    async componentDidMount(){
        const getMasters = await fetch(`/auth/users/${this.props.match.params.id}`)
       
        const parsedMasters = await getMasters.json();
        // this.setState({
        //     masterDocs:parsedMasters
        // })
        console.log(parsedMasters)
    }
    // userMasters= this.state.masterDocs.map((doc)=>{
    //    return( 
    //         <Link to = {`/docs/${doc._id}`} key={doc._id} >
    //             <div className="card-container">
    //                 <div>
    //                     <h2 >{doc.name}</h2>
    //                     <h3>Date Created:</h3>
    //                     <h4>{doc.dateCreated}</h4>
    //                     <h3>Versions Available:</h3>
    //                     <h4>{doc.versions.length}</h4>
    //                 </div>
    //             </div>
    //         </Link>
    //     )
    // })
    render(){
    return(
        <div>
            {/* {userMasters} */}
            User Show Component 
        </div>
    )
}

}

export default withRouter(UserShow)