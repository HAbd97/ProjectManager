import React from "react";
import "./Login.css";
import axios from "axios";
import Navbar from "./navbar";
import queryString from "query-string";
import { baseurl } from "./baseurl";

class UpdateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consumedHours: "",
      status: ""
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  hourChange = event => {
    this.setState({ consumedHours: event.target.value });
  };
  status = event => {
    this.setState({ status: event.target.value });
  };
  updateTask = event => {
    event.preventDefault();
    let url = this.props.location.search;
    let params = queryString.parse(url);
    console.log("tid", params.tid);
    console.log("pid", params.pid);
    axios
      .get(baseurl + "/api/MyTask", {
        params: {
          tid: params.tid,
          id: params.pid,
          conHour: this.state.consumedHours,
          status: this.state.status
        }
      })

      .then(res => {
        console.log(res);
        if (res.data) {
          alert("Data Updated");
          this.props.history.push("/TaskList");
        } else {
          alert("Something went wrong!!!!");
          this.props.history.push("/UpdateTask");
        }
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 container-fluid">
                <div class="card updatetask">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title">Update Your Task</h4>
                  </div>
                  <div class="card-body">
                    <form onSubmit={this.updateTask}>
                      <div class="row">
                        <div class="col-md-5">
                          <div class="form-group">
                            <label class="bmd-label-floating">
                              Consumed Hours
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              value={this.state.consumedHours}
                              onChange={this.hourChange}
                            />
                          </div>
                          <br></br>
                          <br></br>
                          <div>
                            <select
                              id="lang"
                              onChange={this.status}
                              class="browser-default custom-select"
                              value={this.state.status}
                            >
                              <option value="Not Started">Not Started</option>
                              <option value="On Going">On Going</option>
                              <option value="Completed">Completed</option>
                            </select>
                            <p></p>
                            <p>{this.state.value}</p>
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="btn btn-primary pull-right">
                        Save Changes
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
export default UpdateTask;
