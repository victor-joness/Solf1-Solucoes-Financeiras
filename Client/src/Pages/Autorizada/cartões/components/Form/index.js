import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [Numero, setNumero] = useState("");
  const [Bandeira, setBandeira] = useState("");
  const [Limite, setLimite] = useState("");
  const [ValorAtual, setValorAtual] = useState("");
  const [Fechamento, setFechamento] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!Numero || !Bandeira) {
      alert("Informe o Numero e a Bandeira do Cartão!");
      return;
    }else if (isExpense === false) {
      if (!Limite || !ValorAtual || !Fechamento) {
        alert("Informe o Limite o ValorAtual e o Fechamento do Cartão!");
        return;
      } 
    }

    const transaction = {
      id: generateID(),
      Numero: Numero,
      Bandeira: Bandeira,
      Limite: Limite,
      ValorAtual: ValorAtual,
      Fechamento:Fechamento,
      expense: isExpense,
    };

    handleAdd(transaction);

    setNumero("");
    setBandeira("");
    setValorAtual("");
    setFechamento("");
    setLimite("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.Label>Numero do cartão</C.Label>
          <C.Input value={Numero} onChange={(e) => setNumero(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Bandeira do cartão</C.Label>
          <C.Input value={Bandeira} onChange={(e) => setBandeira(e.target.value)} />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Limite do cartão</C.Label>
          <C.Input
            value={Limite}
            type="number"
            onChange={(e) => setLimite(e.target.value)}
          />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Valor atual</C.Label>
          <C.Input
            value={ValorAtual}
            type="number"
            onChange={(e) => setValorAtual(e.target.value)}
          />
        </C.InputContent>

        <C.InputContent>
          <C.Label>Fechamento</C.Label>
          <C.Input value={Fechamento} onChange={(e) => setFechamento(e.target.value)} />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rIncome">Crédito</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <C.Label htmlFor="rExpenses">Débito</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
