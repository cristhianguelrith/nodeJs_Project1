import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div className="headerLogo">
                <p>Project 1</p>
            </div>
            <div className="headerNavebarItems">
                <a href="#">Home</a>
                <a href="#">Times</a>
            </div>
            <div className="headerSearchBox">
                <input id="headerSearchBox" className="headerSearchBox" type="text" />
                <button className="headerSearchButton">
                    <img src="#" alt="headerSearchButton" />
                </button>
            </div>
        </div>
    );
}

export default Header;