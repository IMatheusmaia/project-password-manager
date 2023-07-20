import './index.css';

type ViewFormProp = {
  isVisible: (event: React.FormEvent<HTMLButtonElement>) => void
};

function Form({ isVisible }: ViewFormProp) {
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
      <button onClick={ (event) => isVisible(event) }>Cancelar</button>
    </form>
  );
}
export default Form;
