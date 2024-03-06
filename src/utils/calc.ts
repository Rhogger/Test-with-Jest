function sum(a: number, b: number) {
  return b + a;
}

function sub(a: number, b: number) {
  return a - b;
}

function mult(a: number, b: number) {
  return a * b;
}

function div(a: number, b: number) {
  return a / b;
}

function parImpar(n: number) {
  return n % 2 === 0;
}

function calcularFatorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calcularFatorial(n - 1);
}

function calcularMediaPonderada(
  notas: Array<number>,
  pesos: Array<number>
): number {
  const somaNotas = notas.reduce(
    (acc, nota, index) => acc + nota * pesos[index],
    0
  );
  const somaPesos = pesos.reduce((acc: number, peso: number) => acc + peso, 0);
  const media = somaNotas / somaPesos;
  return parseFloat(media.toFixed(2));
}

function ordenarNumeros(lista: number[]) {
  return lista.sort((a, b) => a - b);
}

function calcularPotencia(base: number, expoente: number): number {
  if (expoente === 0) return 1;
  else if (expoente % 2 === 0) {
    const temp: number = calcularPotencia(base, expoente / 2);
    return temp * temp;
  } else return base * calcularPotencia(base, expoente - 1);
}

function gerarNumeroAleatorio(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function encontrarMenorNumero(lista: Array<number>) {
  let menor: number = 0;
  for (let i = 1; i <= lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  return menor;
}

export default {
  sum,
  sub,
  mult,
  div,
  parImpar,
  calcularFatorial,
  calcularMediaPonderada,
  ordenarNumeros,
  calcularPotencia,
  gerarNumeroAleatorio,
  encontrarMenorNumero,
};
