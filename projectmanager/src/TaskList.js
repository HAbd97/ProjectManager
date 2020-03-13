import React from "react";
import "./Login.css";
import Navbar from "./navbar";
import { baseurl } from "./baseurl";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var session;
    console.log("inside function 123");
    session = localStorage.getItem("session");
    if (session == 1) {
      fetch(baseurl + "/api/MyTask", {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(
          result => {
            var namesList = result.map((tasks, index) => {
              // localStorage.setItem('projectid1', tasks.ProjectId);
              return (
                <tr key={tasks.TaskName}>
                  <td>{tasks.ProjectName}</td>
                  <td>{tasks.TaskName}</td>

                  <td>{tasks.EstimatedHours}</td>
                  <td>{tasks.ConsumedHours}</td>
                  <td>{tasks.Deviation}</td>
                  <td>{tasks.Status}</td>
                  <a
                    href={`/UpdateTask?tid=${tasks.TaskId}&pid=${tasks.ProjectId}`}
                  >
                    <button class="btn btn-primary pull-right">
                      Update Task
                    </button>
                  </a>
                </tr>
              );
            });

            this.setState({
              namesList: namesList
            });
          },
          error => {
            console.log("error");
            console.log(error);
          }
        );
      //   this.setState({task:task});
      console.log("after fetch");
    } else {
      alert("Not a valid user..!!");
      this.props.history.push("/ProjectList");
    }
  }

  render() {
    console.log("Namelist ", this.state);
    return (
      <div>
        <Navbar />
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 container-fluid">
                <div className="card tasklist">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title ">TaskList</h4>
                    <p className="card-category"> List of all your tasks </p>
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link " href="/">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body scrolldiv">
                    <div className="table-responsive">
                      <table className="table" id="tasks">
                        <thead className=" text-primary">
                          <th>Project</th>
                          <th>Task</th>

                          <th>Estimated Hours</th>
                          <th>Consumed Hours</th>
                          <th>Deviation</th>
                          <th>Status</th>
                          <th>
                            {" "}
                            <div class="btn-group">
                              {/* <button
                          type="button"
                          class="btn btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Search By project
                        </button> */}
                              {/* <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            Separated link
                          </a>
                        </div> */}
                            </div>
                          </th>
                          {/* <td><a href="/UpdateTask">Update</a></td> */}
                        </thead>
                        <tbody>{this.state.namesList}</tbody>
                      </table>
                    </div>
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
export default TaskList;
