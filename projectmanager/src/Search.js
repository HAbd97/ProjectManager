import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
import Navbar from './navbar';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: "",datefrom: "", dateto: ""};
  }
 project=(e)=>
 {
  this.setState({project:e.target.value})
  e.preventDefault();
 }
  dateFrom = event => {
   
    this.setState({ datefrom: event.target.value });
     event.preventDefault();
  };
  dateTo = event => {
    
    this.setState({ dateto: event.target.value });
    event.preventDefault();
  };
  byProject = event => {
console.log(this.state.project)
    // var projectname = this.setState({ project: event.target.value });;
    event.preventDefault();
    var session = localStorage.getItem('session');
    console.log("session", session)
    if(session == 1)
    {
axios.get("https://localhost:44391/api/Task", {
       
      params:{
        projName: this.state.project
       } 
      })
      // .then(res => res.json())
      .then(
        result => {
          var namesList = result.data.map((tasks, index) => {
            return (
              <tr key={tasks.TaskName}>
                <td>{tasks.TaskName}</td>
                <td>{tasks.ProjectName}</td>
                <td>{tasks.EmployeeName}</td>
              
                <td>{tasks.EstimatedHours}</td>
                <td>{tasks.ConsumedHours}</td>
                <td>{tasks.Deviation}</td>
                <td>{tasks.Status}</td>
                <td>{tasks.Date}</td>
              </tr>
            );
          });

          this.setState({
            namesList: namesList
          })
        }
      );
    console.log("after fetch");
  }
  else{
    alert("Invalid user....!!")
  }
}
  byDate = (event) => {
    event.preventDefault();
    // debugger
    var session = localStorage.getItem('session');
    console.log("session", session)
    console.log("from",this.state.datefrom);
    console.log("to ", this.state.dateto);
    
    if(session == 1)
    {   
      var data1 = this.state.datefrom;
      var data2 = this.state.dateto; 
      // var data ={ data1,data2}
      // console.log(data);
    axios.get("https://localhost:44391/api/Task", {
      params: {
        fromDate: this.state.datefrom,
       toDate: this.state.dateto  
      },
          
      })
      //.then(res => res.data.json())   
      .then(
        result => {       
          var namesList = result.data.map((tasks, index) => {
            console.log("result",tasks)
            return (
              <tr key={tasks.TaskName}>
                <td>{tasks.ProjectName}</td>
                <td>{tasks.TaskName}</td>
                <td>{tasks.EmployeeName}</td>       
                <td>{tasks.EstimatedHours}</td>
                <td>{tasks.ConsumedHours}</td>
                <td>{tasks.Deviation}</td>
                <td>{tasks.Status}</td>
                <td>{tasks.Date}</td>
              </tr>
            );
          });

          this.setState({
            namesList: namesList
          })
        }
      );
             console.log("after fetch");
      }
      else{
        alert("Invalid User...!!")
      }
  };
  render() {
    console.log("Namelist ", this.state.namesList);
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
                    
                      <form onSubmit={this.byDate}>
                        <div class="row">
                          <div class="col-md-5">
                          <label class="bmd-label-floating">
                                Date From
                              </label>
                            <div class="form-group">
                              
                              <input
                                type="date"
                                value={this.state.datefrom}
                                class="form-control"
                                onChange={this.dateFrom}
                              />
                            </div>
                            <label class="bmd-label-floating">Date To</label>
                            <div class="form-group">
                    
                              <input
                                type="date"
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
                        </div>
                        </div>
                          </form>  
                          <div>

                          <form onSubmit={this.byProject}>
                        <div class="row">
                          <div class="col-md-5">
                            <div class="form-group">
                              <label class="bmd-label-floating">
                                Project
                              </label>
                              <input
                                type="text"
                                value={this.state.project}
                                class="form-control"
                                onChange={this.project}
                              />
                            </div> 
                            <button
                          type="submit"
                          class="btn btn-primary pull-right"
                        >
                          Search By Project
                        </button>
                            </div>
                            </div>
                            </form> 
                            </div>                  
                        {/* <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Search By project
                        </button> */}
                        {/* <div class="dropdown-menu" >
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
                        </div> */}
                         {/* <div>
                        <select id="lang" onChange={this.projectChange} value={this.state.project}>
                            <option value="Astra">Astra</option>
                            <option value="Payroll">Payroll</option>
                            <option value="FoodStore">FoodStore</option>
                        </select>
                        <p></p>
                        <p>{this.state.value}</p>
                       </div> */}
                        </div>               
                      <table class="table">
                        <thead className=" text-primary">
                        <th>Project</th>
                          <th>Task</th>
                          
                          <th>Employee Name</th>
                          

                          <th>Estimated Hours</th>

                          <th>Consumed Hours</th>
                          <th>Deviation</th>
                          <th>Status</th>
                          <th>Date</th>
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
      // </div>
    );
  }
}
export default Search;
