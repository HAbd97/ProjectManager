import React from "react";
import logo from "./logo.svg";
import Navbar from "./navbar";
import "./App.css";
import AllTasks from './AllTasks';
import UserLogin from "./UserLogin";
import ProjectList from "./ProjectList";
import TaskList from "./TaskList";
import Search from "./Search";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import { BrowserRouter, Route } from "react-router-dom";
class App extends React.Component {
  
  
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={UserLogin}></Route>
            <Route exact path="/TaskList" component={TaskList}></Route>
            <Route exact path="/ProjectList" component={ProjectList}></Route>
            <Route exact path="/AllTasks" component={AllTasks}></Route>
            <Route exact path="/AddTask" component={AddTask}></Route>
            <Route exact path="/Search" component={Search}></Route>
            <Route exact path="/UpdateTask" component={UpdateTask}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
