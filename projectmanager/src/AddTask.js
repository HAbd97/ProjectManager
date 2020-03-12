import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Nav
} from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import Navbar from "./navbar";
import { baseurl } from "./baseurl";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: "",
      task: "",
      description: "",
      estimatedHours: "",
      consumedHours: "",
      date: "",
      list: ""
    };
  }
  componentDidMount() {
    axios.get(baseurl + "/api/DashBoard").then(
      result => {
        var data = result.data;
        console.log(data);
        var list = data.map((dt, index) => {
          return <option value={dt.ProjectId}>{dt.Project}</option>;
        });
        this.setState({ list: list });
      },
      error => {
        console.log("Error is in dash", error);
      }
    );
  }

  taskChange = event => {
    this.setState({ task: event.target.value });
  };
  description = event => {
    this.setState({ description: event.target.value });
  };
  estimatedHours = event => {
    this.setState({ estimatedHours: event.target.value });
  };
  consumedHours = event => {
    this.setState({ consumedHours: event.target.value });
  };
  date = event => {
    this.setState({ date: event.target.value });
  };
  handleChange = event => {
    this.setState({ ProjectId: event.target.value });
  };

  addTask = event => {
    var session = localStorage.getItem("session");
    var userId = localStorage.getItem("userId");
    console.log("user", userId);
    if (session == 1) {
      console.log("Inside submit button");
      event.preventDefault();

      axios
        .post(baseurl + "/api/Task", {
          EmpId: userId,
          TaskName: this.state.task,
          Description: this.state.description,
          ProjectId: this.state.ProjectId,
          EstimatedHours: this.state.estimatedHours,
          TaskDate: this.state.date
        })

        .then(res => {
          console.log(res);
          if (res.config.data) {
            this.props.history.push("/TaskList");
          } else {
            this.props.history.push("/AddTask");
          }
        });
    } else {
      alert("Not a valid user.....!!");
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 container-fluid">
                <div class="card">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Add Task</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={this.addTask}>
                      <div class="row">
                        <div class="col-md-5">
                          <div class="form-group">
                            <label class="bmd-label-floating">Project</label>

                            <div>
                              <select
                                id="lang"
                                onChange={this.handleChange}
                                value={this.state.ProjectId}
                              >
                                {this.state.list}
                              </select>
                              <p></p>
                              <p>{this.state.value}</p>
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="bmd-label-floating">Task</label>
                            <input
                              type="text"
                              class="form-control"
                              value={this.state.task}
                              onChange={this.taskChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="bmd-label-floating">
                              Description
                            </label>
                            <textarea
                              class="form-control"
                              rows="5"
                              value={this.state.description}
                              onChange={this.description}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="bmd-label-floating">
                            Estimated Hours
                          </label>
                          <div class="form-group">
                            <input
                              type="number"
                              class="form-control"
                              value={this.state.estimatedHours}
                              onChange={this.estimatedHours}
                            />
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="bmd-label-floating">Date</label>
                          <div class="form-group">
                            <input
                              type="date"
                              class="form-control"
                              value={this.state.date}
                              onChange={this.date}
                            />
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary pull-right">
                        Add Task
                      </button>
                      <div class="clearfix"></div>
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
export default AddTask;
