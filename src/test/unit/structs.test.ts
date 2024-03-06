import structs from '../../utils/structs';

describe('Concatenar os Arrays', () => {
  test('Concatenar o [1, 2, "a", "b"] com o [null, "c", 0] para dar [1, 2, "a", "b", [null, "c", 0]]', () => {
    expect(
      structs.concatenarArrays([1, 2, 'a', 'b'], [null, 'c', 0])
    ).toStrictEqual([1, 2, 'a', 'b', [null, 'c', 0]]);
  });
});

describe('Mesclar objetos', () => {
  test(`Mesclar {
    name: 'Rhogger',
    surname: 'Freitas'
  } e {
    prefered_language: 'node',
    framework: 'Angular'
  } para dar: {
    name: 'Rhogger',
    surname: 'Freitas',
    prefered_language: 'node',
    framework: 'Angular',
  }`, () => {
    expect(
      structs.mesclarObjetos(
        { name: 'Rhogger', surname: 'Freitas' },
        { prefered_language: 'node', framework: 'Angular' }
      )
    ).toStrictEqual({
      name: 'Rhogger',
      surname: 'Freitas',
      prefered_language: 'node',
      framework: 'Angular',
    });
  });
});
