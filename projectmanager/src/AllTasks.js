import React from "react";
import "./Login.css";
import Navbar from "./navbar";
import { baseurl } from "./baseurl";

class AllTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var employeeName;
    employeeName = JSON.parse(localStorage.getItem("user"));
    console.log("Employee", employeeName);
    var project = localStorage.getItem("projectName");
    console.log("ProjectName is ", project);
    fetch(`${baseurl}/api/DashBoard?ProjctName=${project}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          var namesList = result.map((tasks, index) => {
            return (
              <tr key={tasks.TaskName}>
                <td>{tasks.TaskName}</td>
                <td>{tasks.EmpName}</td>
                <td>{tasks.EstimatedHours}</td>
                <td>{tasks.ConsumedHours}</td>
                <td>{tasks.Deviation}</td>
                <td>{tasks.Status}</td>
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
    console.log("after fetch");
    localStorage.removeItem("projectName");
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
                    <h4 className="card-title ">All Tasks</h4>
                    <p className="card-category"> List of tasks </p>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table" id="tasks">
                        <thead className=" text-primary">
                          <th>Task</th>
                          <th>Employee Name</th>
                          <th>Estimated Hours</th>
                          <th>Consumed Hours</th>
                          <th>Deviation</th>
                          <th>Status</th>
                          <th>
                            <div class="btn-group"></div>
                          </th>
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
export default AllTasks;
