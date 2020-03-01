import React, { useState } from "react";
import axios from "axios";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  getUsername = event => {
    // console.log("Inside Username change function");
    this.setState({ username: event.target.value });
    event.preventDefault();
  };
  getPassword = event => {
    // console.log("Inside Password change function");
    this.setState({ password: event.target.value });
    event.preventDefault();
  };

  submitMe = event => {
    // console.log("Inside submit button");
    event.preventDefault();
    var msg = "";
    var session ;
    alert(this.state.username);
    alert(this.state.password);

    fetch("https://localhost:44391/api/Login", {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      username: this.state.username,
      password: this.state.password,
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result) {
            alert("Successful Login");
            session = 1;
            localStorage.setItem('user', JSON.stringify(result.username));
            localStorage.setItem('session',1);
            
            this.props.history.push("/TaskList");
          } else {
            this.props.history.push("/");
          }
        },
        error => {
          console.log("error");
          console.log(error);
        }
      );

    console.log("after fetch");
  };

  render() {
    return (
      <div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 container-fluid">
                <div className="card">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title">Login</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.submitMe}>
                      <div className="row">
                        <div className="col-md-6 container-fluid">
                          <div className="form-group">
                            <label className="bmd-label-floating">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={this.state.username}
                              onChange={this.getUsername}
                            />
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="col-md-6 container-fluid">
                          <div className="form-group">
                            <label className="bmd-label-floating">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              value={this.state.password}
                              onChange={this.getPassword}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary pull-right"
                      >
                        Login
                      </button>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserLogin;
