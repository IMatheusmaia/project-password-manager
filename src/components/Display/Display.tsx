type PasswordType = {
  pass: string
};

function Display({ pass }: PasswordType) {
  const green = 'valid-password-check';
  const red = 'invalid-password-check';
  const regexNum = /[0-9]/;
  const regexLetter = /[a-zA-Z]/;
  const regexSymbol = /[!@#$%^&*(),.?":{}|<>]/;
  return (
    <ul>
      <li
        className={ (pass.length >= 8) ? green : red }
      >
        Possuir 8 ou mais caracteres
      </li>
      <li
        className={ (pass.length <= 16 && pass.length !== 0) ? green : red }
      >
        Possuir até 16 caracteres
      </li>
      <li
        className={ (regexNum.test(pass) && regexLetter.test(pass)) ? green : red }
      >
        Possuir letras e números
      </li>
      <li
        className={ (regexSymbol.test(pass)) ? green : red }
      >
        Possuir algum caractere especial
      </li>
    </ul>
  );
}
export default Display;
