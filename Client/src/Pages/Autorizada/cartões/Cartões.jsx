import React from "react";

import "./Cartões.css";

//imports imgs
import Menulateral from "../../../Components/NavBar/menulateral";
import avatar from "../../../images/AVATAR-ICON.png"


const PageAutorizadaCartoes = () => {
    return(
        <div className="cartoes--Container">
            <Menulateral></Menulateral>

            <div className="cartoes--Container__direita">
                <div className="cartoes--Container--direita__usuario">
                    <img src={avatar} alt="avatar do usuario" />
                    <h1>Nome do Usuário</h1>
                </div>

                <div className="cartoes--Container--direita__cards">
                    <h1>PARTE DOS CARTOES</h1>
                </div>

                <div className="cartoes--Container--direita__cards__cruds">
                    <h1>CRUD CARTOES</h1>
                </div>

                <div className="cartoes--Container--direita__footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>    
        </div>
    );
}

export default PageAutorizadaCartoes;