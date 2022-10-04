// 1. Show rating

// function showRating(rating) {
//     let ratings = "";
//     for(let i = 0; i < Math.floor(rating); ++i){
//         ratings += "*";
//         if(i !== Math.floor(rating) - 1) {
//             ratings += " ";
//         }
//     }
//     if(!Number.isInteger(rating)){
//         ratings += " .";
//     }
//     return ratings;
// }

// console.log(showRating(4.5))

// 2. sort by lowest to highest price
// to sort numbers in an array from low to high use
// return parameter.sort((a, b) => a - b);
// function sortLowToHigh(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([20, 60, 80, 10, 40, 30]));

// 3. Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low
function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// 4. Promises
// ASYNC AWAIT
// async function main() {
//     const response = await fetch('');
//     const data = await response.json();

//     return data
// }

// main()

// async function getUsers() {
//     const response = await fetch('');
//     const data = await response.json()

//     console.log(data)
// }

// getUsers()

// 5. Find all the posts by a single user

// async function postByUser(userId) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json()

//      const post = data.filter( elem => elem.userId === userId)
//     console.log(post)
// }

// postByUser(4)

// 6. Find the first 6 incomplete todos

async function firstSixIncomplete(userId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await response.json()

    const incompleted = data.filter(elem => !elem.completed).slice(0, 6);
    console.log(incompleted)
}

firstSixIncomplete(6)
