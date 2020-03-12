import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";

class Login extends React.Component {
    constructor() {
        super();
        this.state = { username: "", password: "" }
    }


    // export default function Login() {
    //   const [username, setUsername] = useState("");
    //   const [password, setPassword] = useState("");

    //   validateForm = () =>  {
    //     return this.state.username.length > 0 && this.state.password.length > 0;
    //   }

    setUsername = (event) => {
        this.setState({ username: event.target.value });
    }
    setPassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event) => {
        axios.post('http://localhost:44386/api/Login', {
            'username': this.state.username,
            'password': this.state.password
        })
            .then(res => {
                if (res.data) {
                    alert("Successful Login");
                    this.props.history.push("/about");

                }
                else {

                    this.props.history.push("/login");
                }

                // this.setState({ msg: msg });
            })


    }
    render() {

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit()}>
                    <FormGroup controlId="Username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <input
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.setUsername()}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <input
                            value={this.state.password}
                            onChange={this.setPassword()}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" className="lblcolor" type="submit">
                        Login
        </Button>
                </form>
            </div>
        );

    }
}

export default Login;