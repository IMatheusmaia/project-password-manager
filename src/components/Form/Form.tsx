function Form() {
  return (
    <div>
      <ul>
        <li>
          <label>
            Nome do Serviço
            <input type="text" />
          </label>
        </li>
        <li>
          <label>
            Login
            <span> * </span>
            <input type="text" />
          </label>
          <label>
            Senha
            <span> * </span>
            <input type="password" />
          </label>
        </li>
        <li>
          <label>
            URL
            <input type="text" />
          </label>
        </li>
      </ul>
      <span>* Campos obrigatórios</span>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  );
}
export default Form;
