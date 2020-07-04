import React from 'react';
import "./UserOutput.css"

const UserOutput = (props) => {
    return ( 
        <div className="UserOutPut"> 
            <p> First Para </p>
            <p> {props.user} </p>
        </div>
    );
}
 
export default UserOutput;