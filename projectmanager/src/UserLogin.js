import React from "react";
import { baseurl } from "./baseurl";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  getUsername = event => {
    this.setState({ username: event.target.value });
    event.preventDefault();
  };
  getPassword = event => {
    this.setState({ password: event.target.value });
    event.preventDefault();
  };

  submitMe = event => {
    event.preventDefault();
    var msg = "";
    var session;

    fetch(
      `${baseurl}/api/Login?username=${this.state.username}&password=${this.state.password}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (
            result[0].Username == this.state.username &&
            result[0].Password == this.state.password
          ) {
            session = 1;
            localStorage.setItem("user", JSON.stringify(result[0].Username));
            localStorage.setItem("userId", result[0].userId);
            localStorage.setItem("session", 1);
            console.log(result[0].Username, result[0].userId);

            this.props.history.push("/TaskList");
          } else {
            alert("Invalid Username or Password!");
            this.props.history.push("/");
          }
        },
        error => {
          console.log("error");
          console.log(error.message);
        }
      );

    console.log("after fetch");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 container-fluid">
            <div className="card-header card-header-primary">
              <h4 className="card-title headname">PMTracker</h4>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 container-fluid">
                <div className="card cardpadding">
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
