import React from "react";
import "./App.css";
import AllTasks from "./AllTasks";
import UserLogin from "./UserLogin";
import ProjectList from "./ProjectList";
import TaskList from "./TaskList";
import Search from "./Search";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ses from "./isLoggedIn";
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
// ses ={() => ses.session == 1 ? <Redirect to="/" /> : <UserLogin />}
export default App;
