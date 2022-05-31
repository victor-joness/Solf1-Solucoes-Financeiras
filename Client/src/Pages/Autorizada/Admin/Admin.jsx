import React from "react";

import Menulateral from "../../../Components/NavBar/menulateral";
import "./Admin.css";
import avatar from "../../../images/AVATAR-ICON.png";

const PageAutorizadaAdmin = () => {
    return (
        <div className="admin--container">
            <Menulateral></Menulateral>

            <div className="admin--container__direita">
                <div className="admin--container--direita__usuario">
                    <img src={avatar} alt="avatar do usuario" />
                    <h1>Nome do Usuário</h1>
                </div>

                <div className="admin--container--direita__mid">
                    <h1>Statistics</h1>

                    <div className="admin--container--direita--mid__superior">
                        <div className="admin--container--direita--mid--superior histograma">
                            <h1>Histograma</h1>
                        </div>

                        <div className="admin--container--direita--mid--superior Fill">
                            <h1>Fill grafico</h1>
                        </div>

                        <div className="admin--container--direita--mid--superior vertical">
                            <h1>vertical grafico</h1>
                        </div>

                        <div className="admin--container--direita--mid--superior pizza">
                            <h1>pizza grafico</h1>
                        </div>
                    </div>

                    <div className="admin--container--direita--mid__inferior">
                        <div className="admin--container--direita--mid--inferir linha">
                            <h1>linha grafico</h1>
                        </div>

                        <div className="admin--container--direita--mid--inferir barra">
                            <h1>barra grafico</h1>
                        </div>
                    </div>
                </div>

                <div className="admin--container--direita__footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageAutorizadaAdmin;