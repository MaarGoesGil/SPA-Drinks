import React from "react";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-item">
                    <a href="/">Home</a>
                </div>
                <div className="navbar-item">
                    <a href="/drinks">Drinks</a>
                </div>
                <div className="navbar-item">
                    <a href="/about">About</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;