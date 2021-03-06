import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput"
import UserOutput from "./UserOutput/UserOutput"
import Radium from "radium"


class App extends Component {
    state = {
        list_user: [[3,4], [1,2]],
        username: "Aman",
        showDiv: true
    }

    usernameInputHandler = (val) => {
        this.setState({username: val})
    }

    handleDivOnClick = () => {
        this.setState({showDiv: !this.state.showDiv})
    }

    render() {
        const style = {
            border: "2px solid blue",
            padding: "3px",
            fontSize: "20px",
            backgroundColor: "red",
            ":hover": {
                backgroundColor: "lightgreen",
                color: "white"
            }
        }


        let classes = []
        if( this.state.username === "Aman"){
            classes.push("red")
            classes.push("bold")
        }else{
            classes.push("blue")
            classes.push("bold")
        }

        return (
            <div className="App">
                <ol>
                    <li>Create TWO new components: UserInput and UserOutput</li>
                    <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                    <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
                    <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
                    <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
                    <li>Add a method to manipulate the state (=> an event-handler method)</li>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                    <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
                </ol>
                <UserInput usernameHandler={this.usernameInputHandler} username_val={this.state.username}/>
                {this.state.list_user}
                <button onClick={this.handleDivOnClick} style={style}>Click</button>
                {this.state.showDiv && <div>
                    <UserOutput user={this.state.username} lis={this.state.list_user}/>
                    <UserOutput user={this.state.username} lis={this.state.list_user}/>
                    <UserOutput user={this.state.username} lis={this.state.list_user}/>
                </div>}
                <p className={classes.join(" ")}>CHANGE CLASSES DYNAMICALLY</p>
            </div>
        );
    }
}

export default Radium(App);
