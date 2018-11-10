function adjacentElementsProduct(inputArray) {
    let largest;
    let sum = 0;
    inputArray.forEach((num, index) => {
        sum = inputArray[index] * inputArray[index + 1];
        if (index === 0) {
            largest = sum;
        } else {
            if (inputArray[index + 1]) {
                if (sum > largest) {
                    largest = sum;
                }
            }
        }
    });
    return largest;
}