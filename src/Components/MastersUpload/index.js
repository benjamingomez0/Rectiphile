import React from 'react'
import {Link} from 'react-router-dom'; 
import { render } from '@testing-library/react';
import './masters-upload-style.css'

const MastersUpload =(props)=>{

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
                <form className="form"> 
                    Name: <input type = "text" name = "name"/>
                    <br/>
                    File: <input type="file" name= "file"/>
                </form>
            </div>
        </React.Fragment>
    )
}
export default MastersUpload


