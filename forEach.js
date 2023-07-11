const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(val => console.log(val*val));

function printSquare(num, index) {
  console.log(index + " : " + num * num);
}

function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

console.log(customForEach(numbers, printSquare));
