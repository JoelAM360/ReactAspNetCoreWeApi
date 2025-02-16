import React from "react";
import Atividade from "./Atividade";

export default function AtividadeLista({ atividades, deletarAtividade, pegarAtividade }) {
  return (
    <>
      <div className="mt-3">
        {atividades.map((ativ) => {
          return (
            <Atividade
              ativ={ativ}
              key={ativ.id}
              deletarAtividade={deletarAtividade}
              pegarAtividade={pegarAtividade}
            />
          );
        })}
      </div>
    </>
  );
}
