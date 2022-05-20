import React from "react";
import MenulateralNoUser from "../../../Components/NavBar No user/menulateralNoUser";
import "./AdminNoUser.css";
import logo_fundo_verde from "../../../images/LOGO-FUNDO-VERDE.png";

const PageNaoAutorizadaAdmin = () => {
    return (
        <div className="admin-no-user">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="admin-no-user__direita">
                <div className="admin-no-user__top">
                    <h1>Faça Login para ter aceesso a página admin</h1>
                </div>

                <div className="admin-no-user__mid">
                    <img src={logo_fundo_verde} alt="" />
                </div>

                <div className="admin-no-user__bot--footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageNaoAutorizadaAdmin;