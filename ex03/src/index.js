function* myGenerator() {
    yield*[1, 2, 3, 4, 5];
    yield*'Arena';
    yield* arguments;
}

let iterator = myGenerator(6, 7, 8);
let generatorArray = [];

for (i of iterator)
    generatorArray.push(i);
console.log(generatorArray);
// Only change code above this line
module.exports = { generatorArray, myGenerator };