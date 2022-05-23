import React from "react";
import { useNavigate } from 'react-router-dom';

import "./OptionsContainer.css";

import iconUser from "../../images/icons options/USER.png";
import iconEndereco from "../../images/icons options/MAP-PIN.png";
import iconCredit from "../../images/icons options/CREDIT-CART.png";
import iconDespesa from "../../images/icons options/BOLSA-DINHEIRO.png";

const OptionsContainer = () => {
    const navigate = useNavigate();

    const Dashboard_conta = () =>{
        navigate(`/Dashboard-conta`);
    } 

    const Dashboard_endereço = () =>{
        navigate(`/Dashboard-endereço`);
    } 

    const Dashboard_despesa = () =>{
        navigate(`/Dashboard-despesa`);
    }

    const Dashboard_card = () => {
        navigate(`/cartoes`);
    }



    return (
        <div className="OptionsContainer--infos">
            <div className="OptionsContainer--infos__conta">
                <div className="OptionsContainer--infos__conta__icon" onClick={Dashboard_conta}>
                    <img src={iconUser} alt="icon de user" />
                </div>

                <div className="OptionsContainer--infos__conta__pessoais" onClick={Dashboard_conta}>
                    <p>Conta</p>
                    <p>Informações Pessoais</p>
                </div>
            </div>

            <div className="OptionsContainer--infos__conta">
                <div className="OptionsContainer--infos__conta__icon" onClick={Dashboard_endereço}>
                    <img src={iconEndereco} alt="icon de user" />
                </div>

                <div className="OptionsContainer--infos__conta__pessoais" onClick={Dashboard_endereço}>
                    <p>Endereço</p>
                    <p>Adicione seu endereço</p>
                </div>
            </div>

            <div className="OptionsContainer--infos__conta">
                <div className="OptionsContainer--infos__conta__icon" onClick={Dashboard_card}>
                    <img src={iconCredit} alt="icon de user" />
                </div>

                <div className="OptionsContainer--infos__conta__pessoais" onClick={Dashboard_card}>
                    <p>Método de Pagamento</p>
                    <p>Cadastre seus Cartões</p>
                </div>
            </div>

            <div className="OptionsContainer--infos__conta">
                <div className="OptionsContainer--infos__conta__icon" onClick={Dashboard_despesa}>
                    <img src={iconDespesa} alt="icon de user" />
                </div>

                <div className="OptionsContainer--infos__conta__pessoais" onClick={Dashboard_despesa}>
                    <p>Adicionar Despesa</p>
                    <p>Hora de passar dos limites</p>
                </div>
            </div>
        </div>
    )
}

export default OptionsContainer;