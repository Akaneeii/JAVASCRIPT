const nums = [10,20,30];
// nums[2] = 99;
// or
nums[nums.length - 1] = 99;
console.log(nums);


//11b

function getLastValue(array){

    const lastValue = array[array.length - 1];

    return lastValue ;
}


const array1 = [1,20,22,24,5];
const array2 = ['hi', 'hello', 'good'];

console.log(getLastValue(array1));
console.log(getLastValue(array2));

//11c

function arraySwap(array){

    let swap = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = swap;

    return array;
}
console.log(arraySwap(array1));
console.log(arraySwap(array2));







