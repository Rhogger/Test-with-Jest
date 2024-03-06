import strings from '../../utils/strings';

describe('Validar e-mail', () => {
  test('verificar se o e-mail "rhoggerrv@gmail.com" é válido', () => {
    expect(strings.validarEmail('rhoggerrv@gmail.com')).toBe(true);
  });

  test('verificar se o e-mail "teste.com@.com@<>" é válido', () => {
    expect(strings.validarEmail('teste.com@.com@<>')).toBe(false);
  });

  test('verificar se o e-mail "@teste.com" é válido', () => {
    expect(strings.validarEmail('@teste.com')).toBe(false);
  });

  test('verificar se o e-mail "rhoggerrv@gmail" é válido', () => {
    expect(strings.validarEmail('rhoggerrv@gmail')).toBe(false);
  });
});

describe('Identificar quantos caracteres tem uma string', () => {
  test('Verificar se a string "É só um teste" possui 13 caracteres', () => {
    expect(strings.contarCaracteres('É só um teste')).toBe(13);
  });

  test('Verificar se a string "" possui 0 caracter', () => {
    expect(strings.contarCaracteres('')).toBe(0);
  });
});

describe('Inverter uma string', () => {
  test('Inverter "" para ver se fica ""', () => {
    expect(strings.inverterString('')).toBe('');
  });

  test('Inverter "FAZ O REVERSO E JOGA DE LADO" para ver se fica "ODAL ED AGOJ E OSREVER O ZAF"', () => {
    expect(strings.inverterString('FAZ O REVERSO E JOGA DE LADO')).toBe(
      'ODAL ED AGOJ E OSREVER O ZAF'
    );
  });

  test('Inverter "REVERSO" para ver se fica "OSREVER"', () => {
    expect(strings.inverterString('REVERSO')).toBe('OSREVER');
  });
});

describe('Transformar uma string em uppercase', () => {
  test('Transformar em uppercase a string "maiusculo"', () => {
    expect(strings.converterParaMaiusculas('maiusculo')).toBe('MAIUSCULO');
  });

  test('Transformar em uppercase a string "A A a a A A a a A a"', () => {
    expect(strings.converterParaMaiusculas('A A a a A A a a A a')).toBe(
      'A A A A A A A A A A'
    );
  });
});
