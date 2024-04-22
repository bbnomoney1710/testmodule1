function insertNumberToArray(arr, x, index) {
    if (index < 0 || index > arr.length) {
        return arr;
    } else {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === index) {
                newArr.push(x);
            }
            newArr.push(arr[i]);
        }
        if (index === arr.length) {
            newArr.push(x);
        }
        return newArr;
    }
}

var originalArray = [1, 2, 3, 4, 5];
var updatedArray = insertNumberToArray(originalArray, 10, 2);
console.log(updatedArray);