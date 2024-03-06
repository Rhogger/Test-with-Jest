function validarEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function contarCaracteres(str: string) {
  return str.length;
}

function inverterString(str: string) {
  return str.split('').reverse().join('');
}

function converterParaMaiusculas(str: string) {
  return str.toUpperCase();
}

export default {
  validarEmail,
  contarCaracteres,
  inverterString,
  converterParaMaiusculas,
};
