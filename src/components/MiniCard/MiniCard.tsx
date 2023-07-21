import { v4 as uuidv4 } from 'uuid';
import FormInfoType from '../../types/typeForm';
import './index.css';

type ListFormInfoType = {
  listInfos: FormInfoType[]
};

function MiniCard({ listInfos }: ListFormInfoType) {
  return (
    <>
      { listInfos.map(({ service, login, password, url }) => (
        <div key={ uuidv4() } className="minicard">
          <ul>
            <li><a href={ url }>{service}</a></li>
            <li>{login}</li>
            <li>{password}</li>
          </ul>
        </div>))}
    </>
  );
}
export default MiniCard;
