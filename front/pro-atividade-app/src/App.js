import "./App.css";
import React, { useEffect, useState } from "react";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import ModalComponent from "./components/Modal";
import { api } from "./api/atividade";

function App() {
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (atividade.id !== 0) setAtividade({ id: 0 });
    setShow(true);
  };

  const pegarTodasAtividades = async () => {
    const response = await api.get("/atividade");
    return response.data;
  };

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegarTodasAtividades();

      if (todasAtividades) setAtividades(todasAtividades);
    };

    getAtividades();
  }, []);

  const addAtividade = async (ativ) => {
    const response = await api.post("/atividade", ativ);
    setAtividades([...atividades, response.data]);

    setAtividade({ id: 0 });
    handleClose();
  };

  async function deletarAtividade(id) {
    if (await api.delete(`atividade/${id}`)) {
      const atividadeFiltradas = atividades.filter(
        (atividade) => atividade.id !== id
      );

      setAtividades([...atividadeFiltradas]);
    }
  }

  function pegarAtividade(id) {
    const atividade_ = atividades.find((atividade) => atividade.id === id);
    setAtividade(atividade_);

    handleShow();
  }

  async function atualizarAtividade(ativ) {
    const { data } = await api.put(`atividade/${ativ.id}`, ativ);
    setAtividades(
      atividades.map((item) => {
        return item.id === data.id ? data : item;
      })
    );
    setAtividade({ id: 0 });
    handleClose();
  }

  const title = (
    <h1>Atidade(s): {atividade.id !== 0 ? atividade.titulo : ""}</h1>
  );
  return (
    <div className="container mt-4">
      <ModalComponent
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        title={title}>
        <AtividadeForm
          addAtividade={addAtividade}
          atualizarAtividade={atualizarAtividade}
          handleClose={handleClose}
          atividadeSelecionoda={atividade}
          atividades={atividades}
        />
      </ModalComponent>
      <hr />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </div>
  );
}

export default App;
