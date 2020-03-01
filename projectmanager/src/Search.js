import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import Navbar from './navbar';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datefrom: "", dateto: "", project:""};
  }
 
  dateFrom = event => {
   
    this.setState({ datefrom: event.target.value });
     event.preventDefault();
  };
  dateTo = event => {
    
    this.setState({ dateto: event.target.value });
    event.preventDefault();
  };
  projectChange = event => {
    var session = localStorage.getItem('session');
    console.log("session", session)
    if(session == 1)
    {
axios.get("https://localhost:44391/api/Task", {
        project: this.state.project
      })
      .then(res => res.json())
      .then(
        result => {
          var namesList = result.map((tasks, index) => {
            return (
              <tr key={tasks.Task}>
                <td>{tasks.EmpName}</td>
                <td>{tasks.Project}</td>
                <td>{tasks.EstimatedHours}</td>
                <td>{tasks.ConsumedHours}</td>
                <td>{tasks.Date}</td>
              </tr>
            );
          });

          this.setState({
            namesList: namesList
          }).catch(error => {
            console.log(error.response);
          });
        }
      );
    console.log("after fetch");
  }
  else{
    alert("Invalid user....!!")
  }
}
  byDate = event => {
    var session = localStorage.getItem('session');
    console.log("session", session)
    if(session == 1)
    {
    axios.get("https://localhost:44391/api/Task", {
        fromDate: this.state.datefrom,
        toDate: this.state.dateto
      })
      .then(res => res.json())
      .then(
        result => {
          var namesList = result.map((tasks, index) => {
            return (
              <tr key={tasks.Task}>
                <td>{tasks.EmpName}</td>
                <td>{tasks.Project}</td>
                <td>{tasks.EstimatedHours}</td>
                <td>{tasks.ConsumedHours}</td>
                <td>{tasks.Date}</td>
              </tr>
            );
          });

          this.setState({
            namesList: namesList
          }).catch(error => {
            console.log(error.response);
          });
        }
      );
    console.log("after fetch");
      }
      else{
        alert("Invalid User...!!")
      }
  };
  render() {
    return (
      <div>
      <Navbar/>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-8 container-fluid">
                <div class="card search">
                  <div class="card-header card-header-primary">
                    <h4 class="card-title ">Search</h4>
                    <p class="card-category">
                      {/* {" "} */}
                      Your Search Results..
                    </p>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                    
                      <form onSubmit={this.byDate()}>
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group">
                              <label class="bmd-label-floating">
                                Date From
                              </label>
                              <input
                                type="text"
                                value={this.state.datefrom}
                                class="form-control"
                                onChange={this.dateFrom}
                              />
                            </div>
                          
                            <div class="form-group">
                              <label class="bmd-label-floating">Date To</label>
                              <input
                                type="text"
                                value={this.state.dateto}
                                class="form-control"
                                onChange={this.dateTo}
                              />
                            </div>
                            <button
                          type="submit"
                          class="btn btn-primary pull-right"
                        >
                          Search By Date
                        </button>
                        <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Search By project
                        </button>
                        <div class="dropdown-menu" >
                            <ul>
                            <li class="dropdown-item"  value ={this.state.project} onChange={this.projectChange} >
                            Astra
                          </li>
                          <li class="dropdown-item"  value ={this.state.project} onChange={this.projectChange} >
                            Payroll
                          </li>
                          <li class="dropdown-item"  value ={this.state.project} onChange={this.projectChange} >
                            FoodStore
                          </li>                 
                            </ul>   
                        </div>
                      </div>
                          </div>
                         
                        </div>
                      
                      </form>
                      <table class="table">
                        <thead className=" text-primary">
                          <th>Task</th>
                          <th>Employee Name</th>
                          <th>Project</th>

                          <th>Estimated Hours</th>

                          <th>Consumed Hours</th>
                          <th>Date</th>
                        </thead>
                        <tbody></tbody>
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
export default Search;
