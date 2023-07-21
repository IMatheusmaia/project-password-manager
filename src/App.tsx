import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiniCard from './components/MiniCard/MiniCard';
import FormInfoType from './types/typeForm';
import './App.css';

function App() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [inputInfo, setInputInfo] = useState<FormInfoType>({
    service: '',
    login: '',
    password: '',
    url: '',
  });
  const [listInfos, setListInfos] = useState<FormInfoType[]>([]);
  const [submit, setSubmit] = useState(false);

  function handleVisibility(): void {
    setVisibility(!visibility);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputInfo({
      ...inputInfo,
      [id]: value,
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setListInfos([...listInfos, inputInfo]);
    setVisibility(false);
    setInputInfo({
      service: '',
      login: '',
      password: '',
      url: '',
    });
    setSubmit(true);
  };

  return (
    <>
      <Header />
      { visibility && <Form
        onSubmit={ (event) => handleSubmit(event) }
        isVisible={ () => handleVisibility }
        handleChange={ (event) => handleChange(event) }
        inputInfo={ inputInfo }
      />}
      {!visibility && <button onClick={ handleVisibility }> Cadastrar nova senha</button>}
      {submit && !visibility && <MiniCard listInfos={ listInfos } />}
      {!submit && !visibility && <p> Nenhuma senha cadastrada </p>}
    </>
  );
}

export default App;
