import React ,{ useState }from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../images/LOGO.png";
//import css
import "./menulateral.css";
//import icons
import house from "../../images/icons navbar/HOUSE.png";
import user from "../../images/icons navbar/USER.png";
import galeria from "../../images/icons navbar/GALERIA.png";
import cartao from "../../images/icons navbar/CARTAO.png";
import identidade from "../../images/icons navbar/IDENTIDADE.png";
import avatar from "../../images/AVATAR-ICON.png"; 
import exit from "../../images/EXIT.png";

const Menulateral = () => {
    //pegar alguma coisa para verificar se ta logado;
    //ex
    let logado = 0;


    const navigate = useNavigate();
    //se nao tiver logado;
    const NaoUser = () => {
        navigate(`/Naologin`);
        console.log(logado)
    }

    const NaoDashboard = () => {
        navigate(`/Naodashboard`);
    }

    const Naocartões = () => {
        navigate(`/Naocartoes`);
    }

    const Naoadmin = () => {
        navigate(`/Naoadmin`);
    }

    //se ja tiver logado;
    const House = () => {
        navigate(`/`);
    }

    const User = () => {
        navigate(`/login`);
    }

    const Dashboard = () => {
        navigate(`/dashboard`);
    }

    const cartões = () => {
        navigate(`/cartões`);
    }

    const admin = () => {
        navigate(`/admin`);
    }


    if(logado == 1){
        return(
            <div className="container">
            <div className="container-image">
                <img src={logo} alt="logo do solf1"/>
            </div>

            <div className="container-icons">
                <div className="container-icons__primeiro" onClick={House}>
                    <img src={house} alt="icon house navbar" />
                </div>

                <div className="container-icons__segundo" onClick={User}>
                    <img src={user} alt="icon user navbar" />
                </div>

                <div className="container-icons__terceiro" onClick={Dashboard}>
                    <img src={galeria} alt="icon galeria navbar" />
                </div>

                <div className="container-icons__quarto" onClick={cartões}>
                    <img src={cartao} alt="icon cartao navbar" />
                </div>

                <div className="container-icons__quinto" onClick={admin}>
                    <img src={identidade} alt="icon identidade navbar" />
                </div>
            </div>

            <div className="container-user">
                <div className="container-avatar"><img src={avatar} alt="icon avatar navbar" /></div>
                <div className="container-exit"><img src={exit} alt="icon exit navbar" /></div>
            </div>
        </div>
        )
    }else{
        return (
            <div className="container">
            <div className="container-image">
                <img src={logo} alt="logo do solf1"/>
            </div>

            <div className="container-icons">
                <div className="container-icons__primeiro" onClick={House}>
                    <img src={house} alt="icon house navbar" />
                </div>

                <div className="container-icons__segundo" onClick={NaoUser}>
                    <img src={user} alt="icon user navbar" />
                </div>

                <div className="container-icons__terceiro" onClick={NaoDashboard}>
                    <img src={galeria} alt="icon galeria navbar" />
                </div>

                <div className="container-icons__quarto" onClick={Naocartões}>
                    <img src={cartao} alt="icon cartao navbar" />
                </div>

                <div className="container-icons__quinto" onClick={Naoadmin}>
                    <img src={identidade} alt="icon identidade navbar" />
                </div>
            </div>

            <div className="container-user">
                <div className="container-avatar"><img src={avatar} alt="icon avatar navbar" /></div>
                <div className="container-exit"><img src={exit} alt="icon exit navbar" /></div>
            </div>
        </div>
        )
    }
}

export default Menulateral;