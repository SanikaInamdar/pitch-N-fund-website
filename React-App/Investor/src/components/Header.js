import React from "react";
import Profile from '../img/google.png'

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={Profile} alt="" width="30px" height="30px" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Your Profile</a>
                        <a className="dropdown-item" href="#">Update Profile</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Sign Out</a>
                    </div>
                </div>
                <a href="#home" className="navbar-brand">Name</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div id="navigation" className="navbar-nav">
                        <a href="#deets" className="nav-link">Marketplace</a>
                        <a href="#memes" className="nav-link">My Investments</a>
                        <a href="#memes" className="nav-link">Wish List</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;