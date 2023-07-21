import FormInfoType from '../types/typeForm';

function checkInfo(inputInfo: FormInfoType): boolean | undefined {
  const { service, login, password } = inputInfo;
  const emptyService = service === '';
  const emptyLogin = login === '';
  const minLengthPass = password.length >= 8;
  const maxLengthPass = password.length <= 16;
  const symbolPass = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/.test(password);

  if (!emptyService && !emptyLogin && minLengthPass
    && maxLengthPass && symbolPass) return true;
}
export default checkInfo;
