import React from "react";

import "./Dashboard.css";

import UserContainer from "../../../Components/User/UserContainer";
import OptionsContainer from "../../../Components/Options/OptionsContainer";
import Menulateral from "../../../Components/NavBar/menulateral";
import avatar from "../../../images/AVATAR-ICON.png";


const PageAutorizadaDashboard = () => {
    return (
        <div className="Dashboard--Container">
            <Menulateral></Menulateral>

            <div className="Dashboard--Container--direita">
                <div className="Dashboard--Container--direita__usuario">
                    <img src={avatar} alt="avatar do usuario" />
                    <h1>Nome do Usuário</h1>
                </div>

                <div className="Dashboard--Container--direita__menu">
                    <UserContainer></UserContainer>
                    <OptionsContainer></OptionsContainer>
                </div>

                <div className="Dashboard--Container--direita__footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageAutorizadaDashboard;