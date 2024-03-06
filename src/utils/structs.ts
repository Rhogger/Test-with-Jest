function concatenarArrays(arr1: any[], arr2: any[]) {
  arr1.push(arr2);
  return arr1;
}

function mesclarObjetos(objeto1: {}, objeto2: {}) {
  return { ...objeto1, ...objeto2 };
}

export default {
  concatenarArrays,
  mesclarObjetos,
};
