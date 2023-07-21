import { useState } from 'react';
import FormInfoType from '../../types/typeForm';
import checkInfo from '../../Utils/checkInfo';
import Display from '../Display/Display';
import './index.css';

type ViewFormType = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  isVisible: () => () => void,
  handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void,
  inputInfo: FormInfoType
};

function Form({ isVisible, handleChange, inputInfo, onSubmit }: ViewFormType) {
  function handleCancelView(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    isVisible()();
  }
  const { service, login, password, url } = inputInfo;
  const [viewPass, setViewPass] = useState<boolean>(false);
  function handleViewPass(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    setViewPass(!viewPass);
  }
  return (
    <>
      <form onSubmit={ onSubmit }>
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
            type={ viewPass ? 'text' : 'password' }
            id="password"
            value={ password }
          />
        </label>
        <button
          data-testid="show-hide-form-password"
          onClick={ (event) => handleViewPass(event) }
          id="viewPass"
        >
          Senha
        </button>
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
