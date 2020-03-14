import React from "react";
import "./App.css";

class Navbar extends React.Component {
  logout = () => {
    localStorage.setItem("session", 0);
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="row container-fluid">
          <div className="col-lg-3 sidebar sidebarwidth container-fluid">
            <div
              class="nav flex-column nav-pills bg-light navwidth"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <h3 className="headname">
                <i class="fa fa-calendar "></i>PMTracker
              </h3>
              <a class="nav-link" href="/ProjectList">
                All Projects
              </a>
              <a class="nav-link" href="/TaskList">
                My Tasks
              </a>
              <a class="nav-link" href="/AddTask">
                Add Task
              </a>
              <a href="/Search" class="nav-link">
                Search
              </a>
              <a href="/" class="nav-link">
                <button
                  class="btn btn-primary pull-right logLeft"
                  onClick={this.logout}
                >
                  Logout
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
