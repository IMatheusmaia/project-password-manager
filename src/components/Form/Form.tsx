import FormInfoType from '../../types/typeForm';
import checkInfo from '../../Utils/checkInfo';
import './index.css';

type ViewFormType = {
  isVisible: () => () => void,
  handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void,
  inputInfo: FormInfoType
};

function Form({ isVisible, handleChange, inputInfo }: ViewFormType) {
  function handleCancelView(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    isVisible()();
  }
  const { service, login, password, url } = inputInfo;
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="service">
            Nome do Serviço
            <input
              onChange={ (event) => handleChange(event) }
              type="text"
              id="service"
              value={ service }
            />
          </label>
        </li>
        <li>
          <label htmlFor="login">
            Login
            <span> * </span>
            <input
              onChange={ (event) => handleChange(event) }
              type="text"
              id="login"
              value={ login }
            />
          </label>
          <label htmlFor="password">
            Senha
            <span> * </span>
            <input
              onChange={ (event) => handleChange(event) }
              type="password"
              id="password"
              value={ password }
            />
          </label>
        </li>
        <li>
          <label htmlFor="url">
            URL
            <input
              onChange={ (event) => handleChange(event) }
              type="text"
              id="url"
              value={ url }
            />
          </label>
        </li>
      </ul>
      <span>* Campos obrigatórios</span>
      <button disabled={ !checkInfo(inputInfo) }>Cadastrar</button>
      <button onClick={ handleCancelView }>Cancelar</button>
    </form>
  );
}
export default Form;
