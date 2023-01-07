import React from "react";
import Logo from "../components/logo";
import illustration from "../images/illustration.svg";
import "./login.css"

const LoginApp = () => {
    return<div>
        <Logo />
        <img id="illustration" src={illustration} alt="Deaf winning the World" />
        <div id="login">
            
        </div>
    </div>
}

export default LoginApp;