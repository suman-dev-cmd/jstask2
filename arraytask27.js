// const givenArray = [477, 8914, 40461, 599148];
// const newArray = givenArray.map(n => n * 2);
// console.log(newArray); 
// console: [954, 17828, 80922, 1198296]

// const givenArray = [ 'pen', 'book', 'code' ];
// const newArray = givenArray.map(w => w + 's');
// console.log(newArray); // console: ['pens', 'books', 'codes']


// const givenArray = [390, 190, 311.85, 67, 19048, 5000, 670];
// const newArray = givenArray.filter(c => c <= 350);
// console.log(newArray) // console: [190, 311.85, 67];


// const givenArray = [
//     { "name": "Shanghai", "population": 24300000 },
//     { "name": "Los Angeles", "population": 3792621 },
//     { "name": "New Delhi", "population": 21800000 },
//     { "name": "Mumbai", "population": 18400000 },
//     { "name": "Chicago", "population": 2695598 },
//     { "name": "Houston", "population": 2100263 },
//   ];
//   const newArray = givenArray.filter( ({ population }) => population >= 5000000);
//   console.log(newArray); // console: [{name: "Shanghai", population: 24300000}, {name: "New Delhi", population: 21800000}, {name: "Mumbai", population: 18400000}]


// const givenArray = [1, 2, 3, 4, 5];
// const sum = givenArray.reduce((acc, curr) => acc + curr);
// console.log(sum); // console: 15

// const givenArray = [1, 2, 3, 4, 5];
// const sum = givenArray.reduce((acc, curr) => acc + curr, 8);
// console.log(sum); // console: 23

// const givenArray = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
// const average = (givenArray.reduce((acc, curr) => acc + curr)) / givenArray.length;
// console.log(average); // console: 1812519559.288255

// const givenArray = [1, 2, 3, 456, 108115, 45909.15154, 1988.1545, 145e8];
// const average = givenArray.reduce((acc, curr, index) => ( index == (givenArray.length -1) ) ? (acc + curr) / givenArray.length : acc + curr);
// console.log(average); // console: 1812519559.288255


// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach(val => console.log(val));
/* console:
1
2
3
4
5
6
7
8
*/

// const givenArray1 = [1, 2, 3, 5, 8];
// const givenArray2 = [1, 2, 3, 4, 5];
// const testArray1 = givenArray1.some(n => n > 5);
// const testArray2 = givenArray2.some(n => n > 5);
// console.log(`givenArray1: ${testArray1}; givenArray2: ${testArray2}`); // console: givenArray1: true; givenArray2: false

// const givenArray = [
//     [1, 2, 3, 4, 5, 6],
//     [10, 20, 30, 40, 50, 60],
//     [100, 200, 300, 400, 500, 600]
//   ];
//   const sum = 
//     givenArray
//       .flat() // flattens the array
//       .reduce((acc, curr) => acc + curr); // finds the sum
//   console.log(sum); // console: 2331

// const users = [
//     [
//       { "firstName": "Lorem", "lastName": "Ipsum" },
//       { "firstName": "Dolor", "lastName": "Sit" },
//       { "firstName": "Amet", "lastName": "Consectetur" }
//     ],
//     [
//       { "firstName": "Adipiscing", "lastName": "Elit" },
//       { "firstName": "Etiam", "lastName": "Lobortis" },
//       { "firstName": "Lorem", "lastName": "Elit" }
//     ],
//     [
//       { "firstName": "Lorem", "lastName": "Ipsum" },
//       { "firstName": "Dolor", "lastName": "Sit" },
//       { "firstName": "Amet", "lastName": "Consectetur" }
//     ],
//     [
//       { "firstName": "Adipiscing", "lastName": "Elit" },
//       { "firstName": "Etiam", "lastName": "Lobortis" },
//       { "firstName": "Lorem", "lastName": "Elit" }
//     ]
//   ];
  
//   const usersFirstNames = users.flatMap(usersGroup => usersGroup.map(u => u.firstName));
  
//   console.log(usersFirstNames); // console: ["Lorem", "Dolor", "Amet", "Adipiscing", "Etiam", "Lorem", "Lorem", "Dolor", "Amet", "Adipiscing", "Etiam", "Lorem"]

// const fruits = [
//     {"name": "bananas", "quantity": 8},
//     {"name": "cherries", "quantity": 3},
//     {"name": "apples", "quantity": 80}
//   ];
  
//   const apples = fruits.find( ({name}) => name == "apples" );
//   console.log(apples); // console: {"name": "apples", "quantity": 80}


// const givenArray = [4, 5, 2, 1, 3];
// givenArray.sort((a, b) => a - b);
// console.log(givenArray);


  