import "./App.css";
import React, { useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";

function App() {
  const [atividades, setAtividades] = useState([
    {
      id: 1,
      prioridade: "1",
      titulo: "Primeira",
      descricao: "Primeira Atividade",
    },
    {
      id: 2,
      prioridade: "2",
      titulo: "Segunda",
      descricao: "Segunda Atividade",
    },
    {
      id: 3,
      prioridade: "3",
      titulo: "Terceira",
      descricao: "Terceira Atividade",
    },
  ]);

  const [atividade, setAtividade] = useState({});

  const addAtividade = (e) => {
    e.preventDefault();
    const atividade = {
      id: atividades.length + 1,
      titulo: document.getElementById("titulo").value,
      prioridade: document.getElementById("prioridade").value,
      descricao: document.getElementById("descricao").value,
    };

    setAtividades([...atividades, { ...atividade }]);
  };

  function deletarAtividade(id) {
    const atividadeFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );

    setAtividades([...atividadeFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade_ = atividades.find((atividade) => atividade.id === id);

    setAtividade(atividade_);
  }

  return (
    <div className="container mt-4">
      <AtividadeForm
        addAtividade={addAtividade}
        atividadeSelecionda={atividade}
        atividades={atividades}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </div>
  );
}

export default App;
