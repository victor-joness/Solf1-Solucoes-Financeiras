import React from "react";
import MenulateralNoUser from "../../../Components/NavBar No user/menulateralNoUser";
import "./DashboardNoUser.css";
import logo_fundo_verde from "../../../images/LOGO-FUNDO-VERDE.png";


const PageNaoAutorizadaDashboard = () => {
    return (
        <div className="dashboard-no-user">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="dashboard-no-user__direita">
                <div className="dashboard-no-user__top">
                    <h1>Faça Login para ter aceesso ao Dashboard</h1>
                </div>

                <div className="dashboard-no-user__mid">
                    <img src={logo_fundo_verde} alt="" />
                </div>

                <div className="dashboard-no-user__bot--footer">
                    <h2>Criado por <span>Victor Mesquita</span> & <span>Livian</span></h2>
                </div>

            </div>
        </div>
    )
}

export default PageNaoAutorizadaDashboard;