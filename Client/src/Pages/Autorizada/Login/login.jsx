import React from "react";
import { Link, useNavigate } from 'react-router-dom';

import "./login.css";

import MenulateralNoUser from "../../../Components/NavBar No user/menulateralNoUser";
import logo from "../../../images/LOGO.png";


const PageAutorizadaLogin = () => {
    const navigate = useNavigate();

    const escolheuSignUp = () => {
        navigate(`/SignUp`);
    }

    const escolheuSignIn = () => {
        navigate(`/SignIn`);
    }


    return (
        <div className="Login-Container">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="Login-Container-Direita">
                <div className="Login-Container-Direita__buttons">
                    <div className="Login-Container-Direita__buttons__image">
                        <img src={logo} alt="logo do solf1" />
                    </div>
                    <div className="Login-Container-Direita__buttons__options">
                        <div className="Login-Container-Direita__buttons__options__signup" onClick={escolheuSignUp}>
                            <p>SIGN UP</p>
                        </div>

                        <div className="Login-Container-Direita__buttons__options__signin" onClick={escolheuSignIn}>
                            <p>SIGN IN</p>
                        </div>
                    </div>
                </div>

                <div className="Login-Container-Direita__footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageAutorizadaLogin;