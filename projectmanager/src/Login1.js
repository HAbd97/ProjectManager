import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = { email: "", password: "" }
    }
    getUsername = (event) => {
        console.log("Inside Username change function");
        this.setState({ email: event.target.value })
        event.preventDefault();
    }
    getPassword = (event) => {
        console.log("Inside Username change function");
        this.setState({ password: event.target.value })
        event.preventDefault();
    }

    submitMe = (event) => {
        console.log("Inside submit button");
        event.preventDefault();
        var msg = "";
        
        axios.post('https://localhost:44386/api/Login', {
            'email': this.state.email,
            'password': this.state.password
        })
         
            .then(res => {
               console.log(res)
                if (res.data) {
                    alert("Successful Login");
                    this.props.history.push("/about");

                }
                else {
                    // msg = "Sorry..Please Try Again";
                    this.props.history.push("/login");
                }

                this.setState({ msg: msg });
            })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.submitMe}>
                    <label >Email:</label><br />
                    <input type="text" value={this.state.email} onChange={this.getUsername} /><br /><br />
                    <label>Password</label><br />
                    <input type="password" value={this.state.password} onChange={this.getPassword} /><br /><br />
                    <button type="submit" >Login</button>
                    {/* <a href = "/about">About</a> */}
                    <label>{this.state.msg}</label>
                </form>
            </div>
        );

    }
}

export default Login;
