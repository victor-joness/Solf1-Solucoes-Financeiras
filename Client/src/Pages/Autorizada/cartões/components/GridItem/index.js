import React from "react";
import * as C from "./styles";
import {
  FaCreditCard,
  FaMoneyBill,
  FaTrash,
} from "react-icons/fa";

import "./style.css";

const GridItem = ({ item, onDelete }) => {
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
    </C.Tr>
  );
};

export default GridItem;