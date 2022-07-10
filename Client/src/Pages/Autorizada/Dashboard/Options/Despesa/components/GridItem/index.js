import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
  FaMarker
} from "react-icons/fa";

const GridItem = ({ item, onDelete, itens, setItens, handleAdd, transactionsList, setTransactionsList}) => {

  const onUpdate = (ID) => {
    const descricao = (window.prompt("Descricao nova"));
    const valor = Number(window.prompt("Valor novo nova"));
    const Categoria = (window.prompt("Categoria nova"));
    const isExpense = item.expense;

    const generateID = () => Math.round(Math.random() * 1000);

    const transaction = {
      id: generateID(),
      desc: descricao,
      amount: valor,
      categoria: Categoria,
      expense: isExpense,
    };

    
    const newArrayTransactions = [...transactionsList, transaction];
    //
    const newArray = itens.filter((newArrayTransactions) => newArrayTransactions.id !== ID);

    const newArrayTransactions2 = [...newArray, transaction];

    localStorage.setItem('transactions',JSON.stringify(newArrayTransactions2));

    setTransactionsList(newArrayTransactions2);

    //caso n funcionar usar o useNavigate
  };


  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td>{item.categoria}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
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
