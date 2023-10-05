const lowercaseWords = mixedArray => {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(mixedArray)) {
            reject("Error: Input is not an array");
        } else {
            const strings = mixedArray.filter(element => typeof element === "string");

            if(strings.length === 0) {
                reject("Error: No strings found in array");
            } else {
                const lowercase = strings.map(element => element.toLowerCase());
                resolve(lowercase);
            }
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const notArray = "Not an array";

const emptyArray = [];

console.log(lowercaseWords(mixedArray));
console.log("\n");
console.log(lowercaseWords(notArray));
console.log("\n");
console.log(lowercaseWords(emptyArray));