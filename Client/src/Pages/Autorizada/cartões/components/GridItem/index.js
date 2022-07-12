import React, { useState } from "react";
import * as C from "./styles";
import {
  FaCreditCard,
  FaMoneyBill,
  FaTrash,
  FaMarker
} from "react-icons/fa";

import "./style.css";

const GridItem = ({ item, onDelete ,itens, setItens, handleAdd, transactionsList, setTransactionsList}) => {

  const onUpdate = (ID) => {
    const numero = Number(window.prompt("Novo Numero do cartao: "));
    const bandeira = window.prompt("Nova Bandeira do cartao: ");
    const Limite = Number(window.prompt("Novo Limite do cartao: "));
    const valorATUAL = Number(window.prompt("Novo Valor atual do cartao: "));
    const fechamento = window.prompt("Novo Fechamento do cartao: ");
    const isExpense = item.expense;

    const generateID = () => Math.round(Math.random() * 1000);

    const transaction = {
      id: generateID(),
      Numero: numero,
      Bandeira: bandeira,
      Limite: Limite,
      ValorAtual: valorATUAL,
      Fechamento: fechamento,
      expense: isExpense,
    };

    const parcial = Number(Limite) - Number(valorATUAL);

    let transaction2;

    if (transaction.expense === false) {
      transaction2 =
          {
              id: transaction.id,
              desc: 'Cartao de credito',
              amount: parcial,
              categoria: bandeira,
              expense: isExpense,
          }
  } else {
      transaction2 = 
          {
              id: transaction.id,
              desc: 'Cartao de debito',
              amount: parcial,
              categoria: bandeira,
              expense: false,
          }
  }

    console.log(transaction);

    
    const newArrayTransactions = [...transactionsList, transaction];
    //
    const newArray = itens.filter((newArrayTransactions) => newArrayTransactions.id !== ID);

    const newArrayTransactions2 = [...newArray, transaction];

    localStorage.setItem('cartoes',JSON.stringify(newArrayTransactions2));

    setTransactionsList(newArrayTransactions2);

    const data = localStorage.getItem('transactions');

    //const [transactionsList, setTransactionsList] = useState(
        //data ? JSON.parse(data) : []
    //);

    const teset = JSON.parse(data);

    const talvez = teset.filter((newArrayTransactions) => newArrayTransactions.id !== ID);

    const newArrayTransactions3 = [...talvez, transaction2];

    localStorage.setItem('transactions',JSON.stringify(newArrayTransactions3));

    console.log(newArrayTransactions3);

    //caso n funcionar usar o useNavigate
  };


  return (
    <C.Tr>
      <C.Td>{item.Numero}</C.Td>
      <C.Td>{item.Bandeira}</C.Td>
      <C.Td>{item.Limite}</C.Td>
      <C.Td>{item.ValorAtual}</C.Td>
      <C.Td>{item.Fechamento}</C.Td>
      <C.Td>
        {item.expense ? (
          <div className="tesste"><div className="credito">Débito</div> <FaMoneyBill></FaMoneyBill> </div>
        ) : (
          <div className="tesste"><div className="credito">Crédito</div> <FaCreditCard></FaCreditCard> </div>
          
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
      <C.Td alignCenter>
        <FaMarker onClick={() => onUpdate(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;