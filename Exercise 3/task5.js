var numbers = [9, 10, 5, 13, 18, 51, 27, 15];
var newNumbers = [];

function multiplesOfTree(numbers){
    for (var i = 0; i < numbers.length; i++){
        if(numbers[i] % 3 == 0){
            newNumbers.push(numbers[i]);
        }
    }

    return newNumbers;
}

console.log(multiplesOfTree(numbers));
