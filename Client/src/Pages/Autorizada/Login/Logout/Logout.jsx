import React from "react";

import "./Logout.css";

import MenulateralNoUser from "../../../../Components/NavBar No user/menulateralNoUser"
import logo from "../../../../images/LOGO.png";
import { useNavigate } from "react-router-dom";

const PageAutorizadaLogout = () => {
    const navigate = useNavigate();

    const escolheuLOGOUT = () => {
        window.alert("Usuario Deslogado com sucesso");
        global.variavel = 0;
        navigate(`/`);
    }

    return (
        <div className="Logout-Container">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="Logout-Container-Direita">
                <div className="Logout-Container-Direita__buttons">
                    <div className="Logout-Container-Direita__buttons__image">
                        <img src={logo} alt="logo do solf1" />
                    </div>
                    <div className="Logout-Container-Direita__buttons__options">
                        <div className="Logout-Container-Direita__buttons__options__signup" onClick={escolheuLOGOUT}>
                            <p>LOGOUT</p>
                        </div>
                    </div>
                </div>

                <div className="Logout-Container-Direita__footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageAutorizadaLogout;