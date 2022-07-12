import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens, handleAdd, transactionsList, setTransactionsList }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("cartoes", JSON.stringify(newArray));

    const data = localStorage.getItem('transactions');

    //const [transactionsList, setTransactionsList] = useState(
        //data ? JSON.parse(data) : []
    //);

    console.log(ID);

    const teset = JSON.parse(data);

    const talvez = teset.filter((newArrayTransactions) => newArrayTransactions.id !== ID);

    const newArrayTransactions3 = [...talvez, newArray];

    localStorage.setItem('transactions',JSON.stringify(talvez));

    console.log(newArrayTransactions3);
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={18}>Número do cartão</C.Th>
          <C.Th width={18}>Bandeira do cartão</C.Th>
          <C.Th width={18}>Limite do cartão</C.Th>
          <C.Th width={18}>Valor Atual</C.Th>
          <C.Th width={18}>Fechamento</C.Th>
          <C.Th width={15}>Tipo</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} itens={itens} setItens={setItens} onDelete={onDelete} handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
