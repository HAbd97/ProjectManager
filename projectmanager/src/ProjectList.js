import React from "react";
import "./Login.css";
import axios from "axios";
import Navbar from './navbar';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // TableData() {

  componentDidMount() {
    console.log("inside function 123");

    fetch("https://localhost:44391/api/Dashboard", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(
        result => {
          var namesList = result.map((tasks, index) => {
            console.log(tasks);
            localStorage.setItem('project', JSON.stringify(tasks.Project) );
            
            return (
              
              <tr key={tasks.Project}>
                <td><a href="/AllTasks">{tasks.Project}</a></td>
                <td>{tasks.EstimatedHours}</td>
                {/* <td>{tasks.ActualHours}</td>
                                  
                                  <td>{tasks.Status}</td> */}
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
  }

  render() {
    console.log("Namelist ", this.state);
    return (
      <div>
      <Navbar/>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 container-fluid">
                <div className="card projectlist">
                  <div className="card-header card-header-primary">
                    <h4 className="card-title ">Project List</h4>
                    <p className="card-category"> List of all your tasks </p>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table" id="tasks">
                        <thead className=" text-primary">
                          <th className="projectpadding">Project</th>
                          <th>Estimated Hours</th>
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
export default ProjectList;
