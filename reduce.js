// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

function sum(accumulator, val,index,arr){
    return accumulator + val;
}

function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue || 0;

  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// console.log("Custom Reduce ", customReduce(numbers,sum,0 ));
console.log("Custom Reduce ", customReduce(numbers,sum ));