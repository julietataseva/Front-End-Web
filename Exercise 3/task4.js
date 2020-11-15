var numbers = [10, 5, 13, 18, 51];

function smallerThanTen(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 10) {
            return true;
        }
    }

    return false;
}

console.log(smallerThanTen(numbers));
