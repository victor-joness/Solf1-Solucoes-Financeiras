import React from "react";
import { useNavigate } from 'react-router-dom';
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
    let logado = global.variavel;

    const navigate = useNavigate();
    //se nao tiver logado;
    const NaoUser = () => {
        navigate(`/login`);
        console.log(logado);
        console.log(global.variavel)
    }

    const NaoDashboard = () => {
        navigate(`/Naodashboard`);
        console.log(global.variavel)
    }

    const Naocartões = () => {
        navigate(`/Naocartoes`);
        console.log(global.variavel)
    }

    const Naoadmin = () => {
        navigate(`/Naoadmin`);
        console.log(global.variavel)
    }

    //se ja tiver logado;
    const House = () => {
        navigate(`/`);
    }

    const User = () => {
        navigate(`/Logout`);
        console.log(global.variavel)
    }

    const Dashboard = () => {
        navigate(`/dashboard`);
        console.log(global.variavel)
    }

    const cartões = () => {
        navigate(`/cartoes`);
        console.log(global.variavel)
    }

    const admin = () => {
        navigate(`/admin`);
        console.log(global.variavel)
    }

    const logout = () => {
        global.variavel = 0;
        window.alert("usuario deslogado com sucesso");
        navigate(`/`);
    }


    if(logado === 1){
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

                <div className="container-icons__quinto" onClick={Naoadmin}>
                    <img src={identidade} alt="icon identidade navbar" />
                </div>
            </div>

            <div className="container-user">
                <div className="container-avatar"><img src={avatar} alt="icon avatar navbar" /></div>
                <div className="container-exit" onClick={logout}><img src={exit} alt="icon exit navbar" /></div>
            </div>
        </div>
        )
    }else if(logado === 0){
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
                <div className="container-exit" onClick={logout}><img src={exit} alt="icon exit navbar" /></div>
            </div>
        </div>
        )
    }else if(logado === 2){
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

                <div className="container-icons__quinto" onClick={admin}>
                    <img src={identidade} alt="icon identidade navbar" />
                </div>
            </div>

            <div className="container-user">
                <div className="container-avatar"><img src={avatar} alt="icon avatar navbar" /></div>
                <div className="container-exit" onClick={logout}><img src={exit} alt="icon exit navbar" /></div>
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
                <div className="container-exit" onClick={logout}><img src={exit} alt="icon exit navbar" /></div>
            </div>
        </div>
        )
    }
}

export default Menulateral;