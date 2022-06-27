import './Dashboard-options-despesa.css';

import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Menulateral from '../../../../../Components/NavBar/menulateral';

import React, { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

const PageDashboardOptionsDespesa = () => {
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

        const total =  Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''}R$ ${Number(total) + global.totalAUX}`);
        global.total = Number(income) - Number(expense) + global.totalAUX;
    }, [transactionsList]);

    const handleAdd = (transaction) => {
        global.despesas = [transactionsList];
        const newArrayTransactions = [...transactionsList, transaction];

        setTransactionsList(newArrayTransactions);

        localStorage.setItem(
            'transactions',
            JSON.stringify(newArrayTransactions)
        );
    };

    return (
        <div className="despesa--container">
            <Menulateral></Menulateral>
            <div className="despesa--container--direita">
                <Header />
                <Resume income={income} expense={expense} total={total} />
                <Form
                    handleAdd={handleAdd}
                    transactionsList={transactionsList}
                    setTransactionsList={setTransactionsList}
                />
                <GlobalStyle />
            </div>
        </div>
    );
};

export default PageDashboardOptionsDespesa;
