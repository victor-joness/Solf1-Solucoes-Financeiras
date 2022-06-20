import React from "react";
import GridItem from "../GridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
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
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
