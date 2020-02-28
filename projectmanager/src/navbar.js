import React from 'react';
import './App.css';
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="row navwidth">
                    <div className="col-lg-3 ">
                 <div class="nav flex-column nav-pills bg-light " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                    <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                </div>
                </div>
                <div className="col-lg-9 navfloat">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-end ">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                               
                                <li class="nav-item">
                                    <a class="nav-link disabled "  href="#">Logout</a>
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