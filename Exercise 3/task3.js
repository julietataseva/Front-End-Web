var numbers = [10, 5, 11, 18, 51, 13, 10];

function isOdd(num) { return num % 2;}

for(var i = 0; i < numbers.length;) {
    if(isOdd(numbers[i])){
        numbers.splice(i, 1);
    }
    else {
        i++;
    }
}

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
