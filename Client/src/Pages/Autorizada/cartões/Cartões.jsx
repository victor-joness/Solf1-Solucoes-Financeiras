import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

import './Cartões.css';

//imports imgs
import Menulateral from '../../../Components/NavBar/menulateral';

const PageAutorizadaCartoes = () => {
    const nome = global.nome;
    const data = localStorage.getItem('transactions');
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transactionsList
            .filter((item) => item.expense)
            .map((transaction) => Number(transaction.amount));

        const amountIncome = transactionsList
            .filter((item) => !item.expense)
            .map((transaction) => Number(transaction.amount));

        const expense = amountExpense
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);
        const income = amountIncome
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${total}`);
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem(
            'transactions',
            JSON.stringify(newArrayTransactions)
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
