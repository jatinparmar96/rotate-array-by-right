let input = [];
let shift = 0;
function shiftFn() {
    input = inputArray.value.split(',');
    shift = inputShift.value;
    // I came up with 2 ways to rotate arrays to right.
    
    // const newArray1 = arrayRotation(input, shift);
    const newArray2 = performantArrayRotation(input, shift);
    output.innerHTML = newArray2.toString();
}

/**
 * The Performant Array rotation is complex to understand but its complexity does
 * not depend on the Array Size N.
 * It splices the array in 2 parts, one with all elements after the N and one with
 * all elements before N, then just merges both the arrays
 * @param {array} arr 
 * @param {int} shift
 * @returns array
 */
function performantArrayRotation(arr, shift) {
    let newArr,firstElement;
    const offset = shift % arr.length;

    console.time("newArrayRotation")
    // Need to use the spread operator since splice method mutates the original array
    newArr = [...arr].splice(-offset);
    firstElement = [...arr].splice(0, (arr.length - (offset)));
    console.timeEnd("newArrayRotation");
    // If the offset is a multiple of array length just return the original array, since
    // both arrays will be same
    if (offset === 0) {
        return newArr
    }
    else {
        firstElement.splice(0,0,newArr)
        return firstElement;
    }
}

/**
 * Rotate array to right based on number of shifts
 *
 * @param arr
 * @param shift
 * @returns {*[]}
 *
 */
function arrayRotation(arr, shift) {
    let newArr = arr;
    console.time('old');
    // Primitive approach rotate array right one by one until shift ends.
    while (shift && shift>0) {
        newArr = rightRotateArrayByOne(newArr);
        shift--;
    }
    console.timeEnd('old');
    return newArr;
}

function rightRotateArrayByOne(arr) {
    const lastElement = arr[arr.length - 1];
    let newArray = [];
    newArray = [...arr].splice(0, arr.length - 1);
    newArray.splice(0, 0, lastElement);
    return newArray;
}