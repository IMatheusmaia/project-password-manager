import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import './App.css';

function App() {
  const [visibility, setVisibility] = useState<boolean>(false);

  function handleVisibility(): void {
    setVisibility(!visibility);
  }

  return (
    <>
      <Header />
      { visibility && <Form isVisible={ () => handleVisibility } />}
      {!visibility && <button onClick={ handleVisibility }> Cadastrar nova senha</button>}
    </>
  );
}

export default App;
