//reversing an array
function reverseArray(array) {
    let output = [];
    for (let i = (array.length - 1); i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function reverseArrayInPlace(array) {
    //floorMid will be loop increment max, because we want to take
    //first half of array and swap with last half.
    let floorMid = Math.floor(array.length / 2);
    for (let i = 0; i < floorMid; i++) {
        // hold on to value at idx i
        let hold = array[i];
        //declare idx for position to swap with
        let swapIdx = (array.length - 1) - i;
        //swap the two indexes
        array[i] = array[swapIdx];
        array[swapIdx] = hold;
    }
    return array;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
