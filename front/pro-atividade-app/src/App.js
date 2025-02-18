import "./App.css";
import React, { useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import ModalComponent from "./components/Modal";

function App() {
  const [atividades, setAtividades] = useState([]);

  const [atividade, setAtividade] = useState({ id: 0 });
  const [show, setShow] = useState(false);

  const addAtividade = (ativ) => {
    setAtividades([...atividades, { ...ativ, id: atividades.length + 1 }]);
  };

  function deletarAtividade(id) {
    const atividadeFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );

    setAtividades([...atividadeFiltradas]);
  }

  function pegarAtividade(id) {
    const atividade_ = atividades.find((atividade) => atividade.id === id);
    console.log(atividade_);

    setShow(true);
    setAtividade(atividade_);
  }

  function atualizarAtividade(ativ) {
    setAtividades(
      atividades.map((item) => {
        return item.id === ativ.id ? ativ : item;
      })
    );

    setAtividade({ id: 0 });
  }

  function cancelarAtividade() {
    setAtividade({ id: 0, prioridade: "", titulo: "", descricao: "" });
  }

  return (
    <div className="container mt-4">
      <AtividadeForm
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
        atividadeSelecionoda={atividade}
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
