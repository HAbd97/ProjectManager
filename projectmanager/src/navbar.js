import React from "react";
import "./App.css";
class Navbar extends React.Component {
  
  render() {
    return (
      <div>
        <div className="row container-fluid">

          <div className="col-lg-3 sidebar container-fluid">
            <div
              class="nav flex-column nav-pills bg-light navwidth"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
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
            </div>
          </div>
          <div className="col-lg-8 container-fluid">
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
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
