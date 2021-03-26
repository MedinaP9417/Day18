// Only change  code below this line
const _ = require('lodash');

let rockStar = new Map([
    ['artist', 'The Rolling Stones'],
    ['song', 'Angie'],
    ['album', 'Goats Head Soup'],
    ['artist', 'Mick Jagger']
]);
let newRock = new Map();

for (let r of rockStar) {
    if (r[0][0] > 'a') {
        newRock.set(r[0], r[1]);
    }
}
console.log(newRock);

// Only change  code above this line
module.exports = { rockStar, newRock };