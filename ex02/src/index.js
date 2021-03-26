// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}

function* insideGenerator1() {
    for (var i = 1; i < 6; i++)
        var x = yield i;
    // Obicna interacija brojeva
}

function* insideGenerator2() {
    for (var i = 10; i < 16; i++)
        var x = yield i;
}

function* insideGenerator3() {
    for (var i = 6; i < 10; i++)
        var x = yield i;
}
let iterator = myGenerator();
let fifteenArray = [];

for (let i = 0; i < 16; i++) {

    let n = iterator.next();
    fifteenArray[i] = n.value + (n.done ? '!' : '#');
}
console.log(fifteenArray.join(', '));

// Only change code above this line
module.exports = { fifteenArray, myGenerator };