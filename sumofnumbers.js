function sumOfNumbersFor(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}

function sumOfNumbersWhile(list) {
  let result = 0;
  let i = 0;
  while (i < list.length) {
    result += list[i++];
  }
  return result;
}

function sumOfNumbersRecursive(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumOfNumbersRecursive(list);
}

function sumOfNumbersUnderscore(list) {
  return _.reduce(list, function (memo, num) {
    return memo + num;
  });
}

const testList = [1, 2, 3, 4, 5];
console.log(sumOfNumbersFor(testList));
console.log(sumOfNumbersWhile(testList));
console.log(sumOfNumbersRecursive(testList));
console.log(sumOfNumbersUnderscore(testList));
