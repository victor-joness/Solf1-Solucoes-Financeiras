import React from "react";

import "./UserContainer.css";
import avatar from "../../images/AVATAR.png";

const UserContainer = () => {
    const total = global.total;
    const nome = global.nome;
    const email = global.email;
    const celular = global.celular;
    const endereco = global.endereco;


    return (
        <div className="user-infos-container">
            <div className="user-infos-container__img">
                <img src={avatar} alt="imagem de perfil do usuario" />
            </div>

            <div className="user-infos-container__pessoais">
                <p className="user-infos-container__pessoais__Nome">{nome}</p>
                <p className="user-infos-container__pessoais__Email">{email}</p>
                <p className="user-infos-container__pessoais__Telefone">{celular}</p>
                <p className="user-infos-container__pessoais__Endereço">{endereco}</p>

                <p className="user-infos-container__pessoais__Saldo">Saldo: {total}</p>
            </div>
        </div>
    )
}

export default UserContainer;