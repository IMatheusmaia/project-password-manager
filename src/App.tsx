import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
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

  return (
    <>
      <Header />
      { visibility && <Form
        isVisible={ () => handleVisibility }
        handleChange={ (event) => handleChange(event) }
        inputInfo={ inputInfo }
      />}
      {!visibility && <button onClick={ handleVisibility }> Cadastrar nova senha</button>}
    </>
  );
}

export default App;
