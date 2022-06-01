import React from 'react';
import './inicial.css';
import MenulateralNoUser from '../../../Components/NavBar No user/menulateralNoUser';
import { useNavigate } from 'react-router-dom';

//imports das images
import grafico from '../../../images/GRAFICOS.png';
import node from '../../../images/NODE-LOGO.png';
import ufc from '../../../images/UFC-LOGO.png';
import react from '../../../images/REACT-LOGO.png';

const PageAutorizadaInicial = () => {
    const navigate = useNavigate();

    const redirecionaprapaginalogin = () => {
        navigate(`/login`);
    };

    const redirecionaprapaginaadmin = () => {
        navigate(`/admin`);
    };

    const redirecionaprapaginadashboard = () => {
        navigate(`/dashboard`);
    };

    let logado = global.variavel;

    if (logado === 1) {
        return (
            <div className="container--pagina--inicial">
                <MenulateralNoUser></MenulateralNoUser>

                <div className="container-direita">
                    <div className="infos-top">
                        <div className="infos-top__esquerda">
                            <h1>
                                FAÇA O CONTROLE DE SEUS GASTOS E GERENCIE SUA
                                VIDA FINANCEIRA
                            </h1>
                        </div>

                        <div className="infos-top__direita">
                            <img src={grafico} alt="Uma imagem de graficos" />
                        </div>
                    </div>

                    <div className="infos-mid">
                        <div className="infos-mid__esquerda">
                            <h1>
                                SEJA BEM VINDO, NAVEGUE PELO MENU AO LADO, OU VÁ
                                DIRETO PRO DASHBOARD
                            </h1>
                        </div>

                        <div
                            className="infos-mid__direita"
                            onClick={redirecionaprapaginadashboard}
                        >
                            <p>Página Dashboard</p>
                        </div>
                    </div>

                    <div className="infos-bot">
                        <div className="infos-bot__container">
                            <img src={node} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={ufc} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={react} alt="" />
                        </div>
                    </div>

                    <div className="infos-bot-footer">
                        <h2>
                            Criado por <span>Victor Mesquita</span> &{' '}
                            <span>Livian</span>
                        </h2>
                    </div>
                </div>
            </div>
        );
    } else if (logado === 2) {
        return (
            <div className="container--pagina--inicial">
                <MenulateralNoUser></MenulateralNoUser>

                <div className="container-direita">
                    <div className="infos-top">
                        <div className="infos-top__esquerda">
                            <h1>
                                FAÇA O CONTROLE DE SEUS GASTOS E GERENCIE SUA
                                VIDA FINANCEIRA
                            </h1>
                        </div>

                        <div className="infos-top__direita">
                            <img src={grafico} alt="Uma imagem de graficos" />
                        </div>
                    </div>

                    <div className="infos-mid">
                        <div className="infos-mid__esquerda">
                            <h1>SEJA BEM VINDO ADMIN, ACESSE A ABA AO LADO </h1>
                        </div>

                        <div
                            className="infos-mid__direita"
                            onClick={redirecionaprapaginaadmin}
                        >
                            <p>Página Admin </p>
                        </div>
                    </div>

                    <div className="infos-bot">
                        <div className="infos-bot__container">
                            <img src={node} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={ufc} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={react} alt="" />
                        </div>
                    </div>

                    <div className="infos-bot-footer">
                        <h2>
                            Criado por <span>Victor Mesquita</span> &{' '}
                            <span>Livian</span>
                        </h2>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container--pagina--inicial">
                <MenulateralNoUser></MenulateralNoUser>

                <div className="container-direita">
                    <div className="infos-top">
                        <div className="infos-top__esquerda">
                            <h1>
                                FAÇA O CONTROLE DE SEUS GASTOS E GERENCIE SUA
                                VIDA FINANCEIRA
                            </h1>
                        </div>

                        <div className="infos-top__direita">
                            <img src={grafico} alt="Uma imagem de graficos" />
                        </div>
                    </div>

                    <div className="infos-mid">
                        <div className="infos-mid__esquerda">
                            <h1>
                                FAÇA LOGIN OU CRIE UMA CONTA PARA TER ACESSO A
                                TODOS OS BENEFICIOS
                            </h1>
                        </div>

                        <div
                            className="infos-mid__direita"
                            onClick={redirecionaprapaginalogin}
                        >
                            <p>Página de Login</p>
                        </div>
                    </div>

                    <div className="infos-bot">
                        <div className="infos-bot__container">
                            <img src={node} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={ufc} alt="" />
                        </div>

                        <div className="infos-bot__container">
                            <img src={react} alt="" />
                        </div>
                    </div>

                    <div className="infos-bot-footer">
                        <h2>
                            Criado por <span>Victor Mesquita</span> &{' '}
                            <span>Livian</span>
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
};

export default PageAutorizadaInicial;
