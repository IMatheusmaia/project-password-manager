import FormInfoType from '../../types/typeForm';
import checkInfo from '../../Utils/checkInfo';
import Display from '../Display/Display';
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
    <>
      <form>
        <label htmlFor="service">
          Nome do Serviço
          <input
            required
            onChange={ (event) => handleChange(event) }
            type="text"
            id="service"
            value={ service }
          />
        </label>
        <label htmlFor="login">
          Login
          <span> * </span>
          <input
            required
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
            required
            onChange={ (event) => handleChange(event) }
            type="password"
            id="password"
            value={ password }
          />
        </label>
        <label htmlFor="url">
          URL
          <input
            required
            onChange={ (event) => handleChange(event) }
            type="text"
            id="url"
            value={ url }
          />
        </label>
        <span>* Campos obrigatórios</span>
        <button disabled={ !checkInfo(inputInfo) }>Cadastrar</button>
        <button onClick={ handleCancelView }>Cancelar</button>
      </form>
      <Display pass={ password } />
    </>
  );
}
export default Form;
