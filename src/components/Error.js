import React from 'react';
import bugIcon from '../bug.png';
import '../stylesheets/error.css'


const Error = props => {


    return (
        <div className="error-div">
            <h1> Error: {props.message} </h1>    
            <img
                src = {bugIcon}
                className="bug-icon"
                alt="car icon" />
        </div>
      );

}

export default Error;