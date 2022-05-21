import React from "react";
import MenulateralNoUser from "../../../Components/NavBar No user/menulateralNoUser";
import logo_fundo_verde from "../../../images/LOGO-FUNDO-VERDE.png";
import "./Cartoes.css";

const PageNaoAutorizadaCartoes = () => {
    return (
        <div className="cartões-no-user">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="cartões-no-user__direita">
                <div className="cartões-no-user__top">
                    <h1>Faça Login para ter aceesso aos cartões</h1>
                </div>

                <div className="cartões-no-user__mid">
                    <img src={logo_fundo_verde} alt="" />
                </div>

                <div className="cartões-no-user__bot--footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>
            </div>
        </div>
    )
}

export default PageNaoAutorizadaCartoes;