import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <a href="/"><span className="navbar-brand mb-0 h1">{props.title}</span></a>
                <span className="navbar-brand mb-0 h1">{props.message}</span>
                <span className="navbar-brand mb-0 h1">Score: {props.score} | Best Score: {props.bestScore}</span>

  </div>
</nav >
    );
}

export default Navbar;