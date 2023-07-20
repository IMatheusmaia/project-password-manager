import './index.css';

type ViewFormType = {
  isVisible: () => () => void
};

function Form({ isVisible }: ViewFormType) {
  function handleCancelView(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    isVisible()();
  }
  return (
    <form>
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
      <button onClick={ handleCancelView }>Cancelar</button>
    </form>
  );
}
export default Form;
