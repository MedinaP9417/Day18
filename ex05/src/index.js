// Only change code below this line

let shoppingList = new Map([
    ['Banana', 3],
    ['Pineapple', 5],
    ['Pear', 2],
    ['Carrot', 10],
    ['Apple', 1.5],
]);

var arrKey = [];
var arrValue = [];

for (let product of shoppingList.entries()) {
    arrKey.push(`groceries: ${product[0]}`);
    arrValue.push(`amount: ${product[1]}`);
}

console.log(arrKey);
console.log(arrValue);

for (let i of shoppingList) {
    console.log(i);
}


module.exports = { shoppingList, arrKey, arrValue };