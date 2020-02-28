import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { datefrom: "", dateto: "" }
    }
    // TableData() {
        dateFrom = (event) => {
            // console.log("Inside Username change function");
            this.setState({ datefrom: event.target.value })
            // event.preventDefault();
        }
        dateTo = (event) => {
            // console.log("Inside Username change function");
            this.setState({ dateto: event.target.value })
            // event.preventDefault();
        }
    

        byDate = (event) => {
        console.log("inside function 123")

        axios.get('https://localhost:44391/api/Task', {
            'fromDate': this.state.datefrom,
            'toDate': this.state.dateto
        })
            // {
                
            //     method: 'GET',
            //     headers: {
                    
            //         Accept: 'application/json',
            //     },
                

            // })

            .then(res => res.json())
            .then(
                (result) => {
                    var namesList = result.map((tasks, index) => {
                        // const { task, project, estimatedhour, consumedhour, deviation, status } = tasks //destructuring
                        return (

                            <tr key={tasks.Task}>
                                <td>{tasks.EmpName}</td>
                                <td>{tasks.Project}</td>
                                <td>{tasks.EstimatedHours}</td>
                                <td>{tasks.ConsumedHours}</td>

                                <td>{tasks.Date}</td>
                            </tr>
                        )
                    })

                    this.setState({
                        namesList: namesList
                    })
                     .catch(error => {
                    console.log(error.response)
                });   
                },
                // (error) => {

                //     console.log('error')
                //     console.log(error)}
               
            )
        //   this.setState({task:task});
        console.log("after fetch")

    }
    render() {
        return (


            <div>


                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header card-header-primary">
                                        <h4 class="card-title ">Search</h4>
                                        <p class="card-category"> Here is a subtitle for this table</p>
                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Search By project
                                                </button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a class="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </div>
                                            <form onSubmit={this.byDate()}>
                                                <div class="row">

                                                    <div class="col-md-5">
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating">Date From</label>
                                                            <input type="text" value ={this.state.datefrom} class="form-control" onChange={this.dateFrom} />
                                                        </div>
                                                        {/* <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Project</label>
                          <input type="text" class="form-control"/>
                        </div>
                      </div>
                      <div class="col-md-4"> */}
                                                        <div class="form-group">
                                                            <label class="bmd-label-floating">Date To</label>
                                                            <input type="text" value ={this.state.dateto} class="form-control"onChange={this.dateTo} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary pull-right">Search By Date</button>
                                            </form>
                                            <table class="table">
                                            <thead className=" text-primary">
                                                   
                                                   <th>
                                                       Task
                                                   </th>
                                                   <th>
                                                       Employee Name 
                                                   </th>
                                                   <th>
                                                      Project
                                                   </th>
                                                   
                                                   <th>
                                                       Estimated Hours
                                                   </th>

                                                   <th>
                                                       Consumed Hours
                                                   </th>
                                                   <th>
                                                       Date
                                                   </th>
                                               </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        )
    }
}
export default Search;

