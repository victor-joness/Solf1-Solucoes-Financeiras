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

        if (Number(transaction.ValorAtual) > Number(transaction.Limite)) {
            alert('valor atual maior que o limite do cartao');
        } else {
            setTransactionsList(newArrayTransactions);

            localStorage.setItem(
                'cartoes',
                JSON.stringify(newArrayTransactions)
            );
            console.log(transaction);

            if (transaction.ValorAtual === '') {
                transaction.ValorAtual = '0';
            }

            if (transaction.expense === false) {
                global.total =
                    global.total +
                    (Number(transaction.Limite) -
                        Number(transaction.ValorAtual));
            } else {
                global.total =
                    global.total +
                    (Number(transaction.Limite) -
                        Number(transaction.ValorAtual));
            }

            const parcial =
                Number(transaction.Limite) - Number(transaction.ValorAtual);

            let parcialArray;

            if (transaction.expense === false) {
                parcialArray = [
                    {
                        id: transaction.id,
                        desc: 'Cartao de credito',
                        amount: parcial,
                        categoria: transaction.Bandeira,
                        expense: transaction.expense,
                    },
                ];
            } else {
                parcialArray = [
                    {
                        id: transaction.id,
                        desc: 'Cartao de debito',
                        amount: parcial,
                        categoria: transaction.Bandeira,
                        expense: false,
                    },
                ];
            }

            const teste = parcialArray;

            const parcialTransactions = localStorage.getItem('transactions');

            //tentando fazer com que nao precise usar o set no local storage para que ele,
            //nao apague os registros antigos.
            console.log(parcialTransactions);

            localStorage.setItem('transactions', JSON.stringify(teste));
        }
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
