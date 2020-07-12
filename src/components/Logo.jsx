import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo_ML.png";

function Logo() {
    return (
        <Link to={`/`}>
            <div className="bar-logo">
                <img src={logo} alt="logo" />
            </div>
        </Link>
    );
}

export default Logo;
