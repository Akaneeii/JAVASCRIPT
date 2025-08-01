function addNum(array,num){

    let newArray = [];
   for (let i = 0; i < array.length; i++){
    //we should use push to add a value to an array not what i wrote before
    //newArray[i] += add; because newArray[i] doesn't exist
        let add = array[i]+num;
        newArray.push(add);
    }

    return newArray;
}

const array1 = [1,2,3];
const array2 =[-2,-1,0,99];

// console.log(addNum(array2,2));


function addArrays(array_x,array_y){

    let array = [];

    if (array_x.length === array_y.length) {
        for (let i = 0; i < array_x.length; i++) {
            const summ = array_x[i] + array_y[i];
            array.push(summ);
    }
     return array;
    }

    else
        console.log('You cannot add two arrays that are not the same size')
    
}

const array3 = [0,0,5]
console.log(addArrays(array1,array3));

//11k
function countPositive(nums){
    let c=0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0)
            c++;
    }
    if (c === 0) {
        console.log('There is no positive number in this array');
        
    }

    return c;


}

console.log(countPositive(array2))

 