import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="title-box">
                <img src="" alt="Logo" />
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