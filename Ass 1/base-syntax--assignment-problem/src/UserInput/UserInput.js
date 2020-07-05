import React from 'react';

const UserInput = (props) => {
    const style = {
        border: "2px solid red"
    }

    return ( 
        <input type="text" onChange={(e) => {props.usernameHandler(e.target.value)}} value={props.username_val} style={style}/>
    );
}   
export default UserInput;