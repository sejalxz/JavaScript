const ages = [12,18,22, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

// const result = ages.filter(checkAdult);
// console.log(result)

function customFilter(arr, callback){
    const results = [];
    for(var i = 0 ; i < arr.length; i++){
        if(callback(arr[i])){
            results.push(arr[i]);
        }
    }
    return results;
}

console.log("Custom Filter ",customFilter(ages, checkAdult));