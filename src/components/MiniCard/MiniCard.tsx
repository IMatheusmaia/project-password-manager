import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import FormInfoType from '../../types/typeForm';
import './index.css';

type ListFormInfoType = {
  listInfos: FormInfoType[]
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void | undefined,
};

function MiniCard({ listInfos, onClick }: ListFormInfoType) {
  const [viewPass, setViewPass] = useState<boolean>(false);
  function handleViewPass(): void {
    setViewPass(!viewPass);
  }
  return (
    <>
      <label htmlFor="viewPass">
        Esconder senhas
        <input
          onChange={ handleViewPass }
          type="checkbox"
          id="viewPass"
        />
      </label>
      { listInfos.map(({ service, login, password, url }) => (
        <div key={ uuidv4() } className="minicard">
          <ul>
            <li><a href={ url }>{service}</a></li>
            <li>{login}</li>
            { viewPass ? <li> ****** </li> : <li>{password}</li>}
            {onClick && (
              <button
                id={ login }
                data-testid="remove-btn"
                onClick={ (event) => onClick(event) }
              >
                Remover
              </button>)}
          </ul>
        </div>))}
    </>
  );
}
export default MiniCard;
