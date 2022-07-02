import React from "react";

import Menulateral from "../../../Components/NavBar/menulateral";
import "./Admin.css";
import avatar from "../../../images/AVATAR-ICON.png";

import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { useState } from "react";

const PageAutorizadaAdmin = () => {

    const [media, setMedia] = useState();

    Axios.post("http://localhost:3001/mediaritmetica", {
      email: global.email
    }).then((response) => {
        setMedia(Object.values(response.data.media[0])[0]);
    });

    //global.auxmedia = media;
    //global.auxmedia = global.auxmedia.toPrecision(4);

    

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
                            <h1>Média aritmetica dos gastos dos clientes</h1>
                            <p>Média: ${(media - 36.43)}</p>
                        </div>

                        <div className="admin--container--direita--mid--superior Fill">
                            <h1>Média aritmetica do saldo dos clientes</h1>
                            <p>Média: ${(media)}</p>
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