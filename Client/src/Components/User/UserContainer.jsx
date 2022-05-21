import React from "react";

import "./UserContainer.css";
import avatar from "../../images/AVATAR.png";

const UserContainer = () => {
    return (
        <div className="user-infos-container">
            <div className="user-infos-container__img">
                <img src={avatar} alt="imagem de perfil do usuario" />
            </div>

            <div className="user-infos-container__pessoais">
                <p className="user-infos-container__pessoais__Nome">Nome do Usuário</p>
                <p className="user-infos-container__pessoais__Email">Email do Usuário</p>
                <p className="user-infos-container__pessoais__Telefone">Telefone do Usuário</p>
                <p className="user-infos-container__pessoais__Endereço">Endereço do Usuário</p>

                <p className="user-infos-container__pessoais__Saldo">Saldo Disponivel</p>
            </div>
        </div>
    )
}

export default UserContainer;