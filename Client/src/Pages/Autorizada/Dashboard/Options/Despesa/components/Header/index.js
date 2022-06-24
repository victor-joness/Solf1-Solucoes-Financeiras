import React from "react";
import * as C from "./styles";

const Header = () => {
  const nome = global.nome;

  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro do {nome}</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;
