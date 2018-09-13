//// Object Destructuring ////

// const person = {
//     name: 'Fred',
//     age: 24,
//     location: {
//         city: 'New York',
//         temp: 90
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`it is ${temperature} in ${city} `);
// }

// const book = {
//     title: 'Snow Crash',
//     author: 'Bill',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name = 'No name'} = book.publisher;

// console.log(`${name}`);


//// Array Destructuring ////

const address = ['1299 Main Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'Unknown State'] = address;    //skip first and last in array

console.log(`You are in ${city} ${state}.`);


const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee,,medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);