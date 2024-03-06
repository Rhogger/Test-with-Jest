import calc from '../../utils/calc';

describe('Somar dois números', () => {
  test('somar 2 com 2 para dar 4', () => {
    expect(calc.sum(2, 2)).toBe(4);
  });
});

describe('Subtrair 2 números', () => {
  test('subtrair 10 com 5 para dar 5', () => {
    expect(calc.sub(10, 5)).toBe(5);
  });
});

describe('Multiplicar 2 números', () => {
  test('multiplicar 999 com 0 para dar 0', () => {
    expect(calc.mult(999, 0)).toBe(0);
  });
});

describe('Dividir 2 números', () => {
  test('dividir 6 com 3 para dar 2', () => {
    expect(calc.div(6, 3)).toBe(2);
  });
});

describe('Descobrir se um número é par ou impar', () => {
  test('verificar se 6 é par', () => {
    expect(calc.parImpar(6)).toBe(true);
  });
});

describe('Descobrir qual o fatorial de um número', () => {
  test('verificar se o fatorial de 5 é 120', () => {
    expect(calc.calcularFatorial(5)).toBe(120);
  });
});

describe('Calcular a média ponderada das notas', () => {
  test('Calcular média ponderada de 3 notas: 8, 9, 4, com pesos: 4,5,6 para dar 6.73', () => {
    expect(calc.calcularMediaPonderada([8, 9, 4], [4, 5, 6])).toBe(6.73);
  });
});

describe('Ordenar números', () => {
  test('Ordenar uma lista de números: 7, 4, 8, 1, 0, 2 para dar 0, 1, 2, 4, 7, 8', () => {
    expect(calc.ordenarNumeros([7, 4, 8, 1, 0, 2])).toEqual([0, 1, 2, 4, 7, 8]);
  });
});

describe('Calcular a potencia de um número', () => {
  test('Verificar se a potencia 32 tem como base 2 e expoente 5', () => {
    expect(calc.calcularPotencia(2, 5)).toBe(32);
  });
});

describe('Gerar um número aleatório', () => {
  test('verificar se o número aleatório entre 0 e 0 pode ser 0', () => {
    expect(calc.gerarNumeroAleatorio(0, 0)).toBe(0);
  });

  test('verificar se o número aleatório entre 0 e 1 de fato esta entre 0 e 1', () => {
    let numAleatorio = calc.gerarNumeroAleatorio(0, 1);
    expect(numAleatorio).toBeGreaterThanOrEqual(0);
    expect(numAleatorio).toBeLessThanOrEqual(1);
  });

  test('verificar se o número aleatório entre 2 e 2 de fato é 2', () => {
    expect(calc.gerarNumeroAleatorio(2, 2)).toBe(2);
  });
});

describe('Encontrar o menor número', () => {
  test('Validar se o menor número entre 0 e 5 é o 0', () => {
    expect(calc.encontrarMenorNumero([0, 1, 2, 3, 4, 5])).toBe(0);
  });
});
