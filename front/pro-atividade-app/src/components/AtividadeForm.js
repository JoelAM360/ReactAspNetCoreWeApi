import { useState, useEffect } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.atividadeSelecionoda.id !== 0)
      setAtividade(props.atividadeSelecionoda);
  }, [props.atividadeSelecionoda]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setAtividade({ ...atividade, [name]: value });
  };

  function atividadeAtual() {
    if (props.atividadeSelecionoda.id !== 0) {
      return props.atividadeSelecionoda;
    } else {
      return atividadeInicial;
    }
  }

  const handleCancelar = (e) => {
    e.preventDefault();
    props.handleClose();
    setAtividade(atividadeInicial);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.atividadeSelecionoda.id !== 0) {
      props.atualizarAtividade(atividade);
    } else {
      props.addAtividade(atividade);
    }

    handleCancelar(e);
  };

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="id" className="form-label">
            Prioridade
          </label>
          <select
            className="form-select"
            id="prioridade"
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}>
            <option selected>Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
          <label for="titulo" className="form-label">
            Título
          </label>
          <input
            id="titulo"
            name="titulo"
            className="form-control"
            type="text"
            onChange={inputTextHandler}
            value={atividade.titulo}
            placeholder="Título"
          />
        </div>

        <div className="col-md-12">
          <label for="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            className="form-control"
            onChange={inputTextHandler}
            value={atividade.descricao}
            placeholder="descricao"></textarea>
        </div>

        <div className="col-12">
          {atividade.id === 0 || atividade === undefined ? (
            <button type="submit" className="btn btn-primary">
              Adicionar
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-success me-2">
                Salvar
              </button>
              <button className="btn btn-danger" onClick={handleCancelar}>
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
