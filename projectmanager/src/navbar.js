import React from "react";
import "./App.css";
class Navbar extends React.Component {
  
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
              <h3><i class="fa fa-calendar"  ></i>PMTracker</h3>
              <a
                class="nav-link"
                href="/ProjectList"
              >
                All Projects
              </a>
              <a
                class="nav-link"
                href="/TaskList"
              >
                My Tasks
              </a>
              <a
                class="nav-link"
                href="/AddTask"
              >
                Add Task
              </a>
              <a href="/Search"
                class="nav-link"
              >
                Search
              </a>
              <a href="/"
                class="nav-link"
              >
                 <i class="fa fa-user" aria-hidden="true"></i>
                <p>Logout</p>
               
              </a>
            </div>
          </div>
          {/* <div className="col-lg-8 container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end navfloat">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Navbar;
