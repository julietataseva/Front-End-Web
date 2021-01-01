function processData(input) {
    const count = {};
    for (const letter of input) {
        count[letter] = count[letter] ? count[letter] + 1 : 1;
    }
    
    let bad = false;
    for (const letter of Object.keys(count)) {
        for (const letter2 of Object.keys(count)) {
            if (count[letter] > count[letter2]) {
                if (!bad && count[letter] - 1 === count[letter2]) {
                    bad = true
                    break;
                } else {
                    console.log("UGLY")
                    return
                }
            }
        }
    }
    
    if (bad) {
        console.log("BAD");
    } else {
        console.log("GOOD");
    }
} 