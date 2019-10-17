import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ currentUser, signOutHandler = function() {} }) {
    return (
        <div className="App-header">
            <NavLink className="logo" to="/">Biddr</NavLink>
            <div className="sessions">
                <NavLink to="/auctions">Auctions</NavLink>
                <NavLink to="/auction/new">New Auction</NavLink>
                {currentUser && (
                    <span>
                        Hello {currentUser.first_name} ||{" "}
                        <a
                            onClick={signOutHandler}
                            className="App-link"
                            href="#signout"
                        >
                            Sign Out
                        </a>
                    </span>
                )}
                {!currentUser && (
                    <span>
                        <NavLink to="/sign_in">Sign In</NavLink> ||{" "}
                        <NavLink to="/sign_up">Sign Up</NavLink>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Navbar;
