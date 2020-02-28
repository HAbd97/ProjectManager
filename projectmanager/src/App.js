import React from 'react';
import logo from './logo.svg';
import Navbar from './navbar';
import './App.css';
import Test from './Test'

import Login from './Login1';
import UserLogin from './UserLogin'
import ProjectList from './ProjectList';
import TaskList from './TaskList';
import Search from './Search';
import AddTask from './AddTask';
import {BrowserRouter, Route} from 'react-router-dom';
class App extends React.Component {
  render()
  {
    return (
      <div>
        {/* <AddTask/> */}
          <ProjectList/>
     
    <BrowserRouter>
      <div>
        {/* <Route exact path="/" component={UserLogin}></Route>
        <Route exact path="/TaskList" component={TaskList}></Route> */}
       {/* <Route exact path="/ProjectList" component={ProjectList}></Route> */}
       {/* <Route exact path="/AddTask" component={AddTask}></Route> */}

      </div>
      </BrowserRouter>
      </div>
     
     
    );
  }
  
}
export default App;
