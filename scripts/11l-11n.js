// //My version

// function minMax(nums)
// {
//     let min = nums[0];
//     let max = nums[0];

//     const object = {};

//      for (let i = 0; i < nums.length; i++) {
//         if (max<nums[i]) 
//             max = nums[i];  
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (min>nums[i]) 
//             min = nums[i];  
//     }
//     object.min = min;
//     object.max = max;

//     return object;
// }

//Improved version (i might wanna use ternary operator)

function minMax(nums) {
    if (!nums || nums.length === 0) {
        return { min: null, max: null };
    }
    let min = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        if (nums[i] < min) min = nums[i];
    }
    return { min, max }; 
}
const array = [3];  
console.log(minMax(array));

//11n
function countWords(words)
{
    let object = {};

    for (let i = 0; i < words.length; i++) {
        
        const word=words[i];

        if (object[word]) {
            object[word]+=1;
        }
        else
            object[word]=1;
        
    }

    return object
}

const arrayOfWords = ['apple', 'grappe', 'apple', 'apple'];

console.log(countWords(['apple', 'grappe', 'apple', 'apple']));

