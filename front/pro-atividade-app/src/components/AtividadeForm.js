import { useState ,useEffect} from "react";

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState({})

  useEffect(() => {
    console.log("Teste 1");
    console.log(atividade);
    
  }, [atividade])

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({...atividade, [name]: value})
  }

  return (
    <>
      <form className="row g-3">
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
            <option selected>
              Selecione...
            </option>
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
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.addAtividade}>
            Add Atividade
          </button>
        </div>
      </form>
    </>
  );
}
