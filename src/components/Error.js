import React from 'react';
import bugIcon from '../bug.png';
import '../stylesheets/error.css'

// handle errors by displaying this component with the recieved error message
const Error = props => {
    return (
        <div className="error-div">
            <h1>Error: {props.message}</h1>    
            <img
                src = {bugIcon}
                className="bug-icon"
                alt="car icon" />
        </div>
      );
}

export default Error;