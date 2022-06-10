import React from 'react';

import './Logout.css';

import MenulateralNoUser from '../../../../Components/NavBar No user/menulateralNoUser';
import logo from '../../../../images/LOGO.png';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const PageAutorizadaLogout = () => {
    const navigate = useNavigate();

    const escolheuLOGOUT = () => {
        window.alert('Usuario Deslogado com sucesso');
        global.variavel = 0;
        navigate(`/`);
    };

    const escolheuREMOVE = () => {
        console.log(global.email);

        Axios.post('http://localhost:3001/remove',{
            email: global.email,
        }).then((response) => {
            console.log(response)
            //faço um if do response e se a mensage for boa ele ja atualiza o estado de uma variavel global que sera usada para identificar o usuario
            window.alert(response.data.msg);

            navigate(`/`);
            global.variavel = 0;
        });
    };

    return (
        <div className="Logout-Container">
            <MenulateralNoUser></MenulateralNoUser>
            <div className="Logout-Container-Direita">
                <div className="Logout-Container-Direita__buttons">
                    <div className="Logout-Container-Direita__buttons__image">
                        <img src={logo} alt="logo do solf1" />
                    </div>
                    <div className="Logout-Container-Direita__buttons__options">
                        <div
                            className="Logout-Container-Direita__buttons__options__signup"
                            onClick={escolheuLOGOUT}
                        >
                            <p>LOGOUT</p>
                        </div>

                        <div
                            className="Logout-Container-Direita__buttons__options__remove"
                            onClick={escolheuREMOVE}
                        >
                            <p>REMOVER CONTA</p>
                        </div>
                    </div>
                </div>

                <div className="Logout-Container-Direita__footer">
                    <h2>
                        Criado por <span>Victor Mesquita</span> &{' '}
                        <span>Livian</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageAutorizadaLogout;
