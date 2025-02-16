import React from "react";

export default function Atividade({ ativ, deletarAtividade, pegarAtividade }) {
  const prioridadeLabel = (param) => {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Indefinido";
    }
  };
  const prioridadeStyle = (param, icon) => {
    switch (param) {
      case "1":
        return icon ? "smile" : "success";
      case "2":
        return icon ? "meh" : "dark";
      case "3":
        return icon ? "frown" : "warning";
      default:
        return "Indefinido";
    }
  };

  return (
    <>
      <div
        className={`card shadow-sm mb-2 border-${prioridadeStyle(
          ativ.prioridade
        )}`}>
        <div className="card-body" key={ativ.id}>
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
              <span className="badge text-bg-secondary me-1">{ativ.id}</span>-
              {ativ.titulo}
            </h5>
            <h6>
              Prioridade:
              <span className="text-black ms-1">
                <i
                  className={`me-1 far fa-${prioridadeStyle(
                    ativ.prioridade,
                    true
                  )}`}></i>{" "}
                {prioridadeLabel(ativ.prioridade)}
              </span>
            </h6>
          </div>

          <div className="card-text">{ativ.descricao}</div>
          <div className="d-flex justifity-content-end pt-2 mt-3 border-top">
            <button
              className="btn btn-outline-primary me-2"
              onClick={() => pegarAtividade(ativ.id)}>
              <i className="fas fa-pen me-2"></i> Editar
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deletarAtividade(ativ.id)}>
              <i className="fas fa-trash me-2"></i> Excluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
