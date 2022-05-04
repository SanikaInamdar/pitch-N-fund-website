import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../../Assets/Images/hamburger.svg";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">pitch&amp;fund</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Hamburger} alt="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div id="hamburger" className="navbar-nav">
                            <a id="link" href="marketplace">Explore Marketplace</a>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;