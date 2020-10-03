
exports.min = function min (array) {
  let min;
  if (array == undefined || array == 0) return 0;
  for (let i = 0;i < array.length; i++){
    if (i == 0) min = array[i];
    if (array[i] < min ){
      min = array[i];
    }
  }
  return min;
}

exports.max = function max (array) {
  let max;
  if (array == undefined || array == 0) return 0;
  for (let i = 0;i < array.length; i++){
    if (i == 0) max = array[i];
    if (array[i] > max ){
      max = array[i];
    }
  }
  return max;
}

exports.avg = function avg (array) {
  let avarage;
  let sumArray = 0;
  if (array == undefined || array == 0) return 0;
  for (let i = 0; i < array.length; i++){
    sumArray = sumArray + array[i];
  }
  avarage = sumArray/array.length;
  return avarage;
}
