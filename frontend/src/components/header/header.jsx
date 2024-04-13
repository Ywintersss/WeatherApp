import React from "react";
import "./header.css";
import Logo from "./Logo.jpg";

export default function Header() {
    return (
        <header className="header">
            <div className="title-box">
                <img src={Logo} alt="Logo" /><br />
                <span>Weather App</span>
            </div>
            <div className="navbar">
                <a href="/">Home</a>
                <a href="/allcities">All Cities</a>
                <a href="/test">Test</a>
            </div>
        </header>
    )
}