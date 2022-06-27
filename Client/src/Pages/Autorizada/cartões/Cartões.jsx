import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

import './Cartões.css';

//imports imgs
import Menulateral from '../../../Components/NavBar/menulateral';

const PageAutorizadaCartoes = () => {
    const data = localStorage.getItem('cartoes');
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );


    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem(
            'cartoes',
            JSON.stringify(newArrayTransactions)
        );
        const anterior = global.despesas;
        console.log(anterior)

        const teste = [{id: 200, desc: "teste4", amount: "100", categoria:"teste4", expense: false}];

        localStorage.setItem(
            'transactions',
            JSON.stringify(teste)
        );
    };

    return (
        <div className="cartoes--container">
            <Menulateral></Menulateral>
            <div className="cartoes--container__direita">
                <Header />
                <Form
                    handleAdd={handleAdd}
                    transactionsList={transactionsList}
                    setTransactionsList={setTransactionsList}
                />
                <GlobalStyle />

                <div className="cartoes--Container--direita__footer">
                    <h2>
                        Criado por <span>Victor Mesquita</span> &{' '}
                        <span>Livian</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageAutorizadaCartoes;
