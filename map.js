const arr = [1, 2, 3, 4, 5];

// const res = arr.map((num)=> num*num);
// console.log(res);

function getSquare(x) {
  return x * x;
}

function customMap(arr, callback) {
  const result = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = callback(arr[i]);
    result.push(temp);
  }
  return result;
};

console.log("Custom Map : ",customMap(arr,getSquare));
