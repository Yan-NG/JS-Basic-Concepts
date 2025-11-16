//array-prototype-methods.js
// array methods
let arr = [1, 2, 3, 4, 5];

//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArr = arr.map(x => x * 2);
console.log(`Mapped Array:`, mappedArr);
//Maps receives a function that is called for each element of the array and returns a new value to be included in the new array.
// the function takes three arguments: the current element (e), the index (i) of the current element, and the array being traversed (originalArray).
//we could use _ to indicate that we are not using that parameter
//we cannot use break or continue in map, but we can use return to skip to the next iteration. We can't use async functions in map directly, as it will return an array of promises instead of values. 


//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
let poppedElement = arr.pop();
console.log(`Popped Element: ${poppedElement}`);
console.log(`Array after pop:`, arr);

//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
let pushedLength = arr.push(6);
console.log(`New Length after Push: ${pushedLength}`);
console.log(`Array after push:`, arr);


//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
let reducedValue = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Reduced Value (Sum): ${reducedValue}`);

// A reducer in JavaScript is a function that takes two arguments: an accumulator and the current value being processed in the array. The purpose of the reducer is to "reduce" the array to a single value by applying a specific operation (like summing numbers, concatenating strings, etc.) across all elements of the array.
// The reducer function is called for each element in the array, and it returns the updated accumulator value, which is then passed to the next call of the reducer until all elements have been processed.

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
let filteredArr = arr.filter(x => x % 2 === 0);
console.log(`Filtered Array (Even Numbers):`, filteredArr);

//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let foundElement = arr.find(x => x > 3);
console.log(`Found Element (First > 3): ${foundElement}`);

//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let includesThree = arr.includes(3);
console.log(`Array includes 3: ${includesThree}`);
//The join() method of Array instances creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
let joinedStr = arr.join(", ");
console.log(`Joined String: '${joinedStr}'`);
//The reverse() method of Array instances reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
arr.reverse();
console.log(`Reversed Array:`, arr);
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let slicedArr = arr.slice(1, 4);
console.log(`Sliced Array (1-4):`, slicedArr);
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let splicedArr = arr.splice(1, 2, 10, 11);
console.log(`Spliced Array (removed elements):`, splicedArr);
console.log(`Array after splice:`, arr);

//The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
let arrKeys = arr.keys();
console.log(`Array Keys:`, Array.from(arrKeys));

//the stort() method of Array instances sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points.
arr.sort((a, b) => a - b);
console.log(`Sorted Array:`, arr);

//The unshift() method of Array instances adds one or more elements to the beginning of an array and returns the new length of the array.
let newLengthAfterUnshift = arr.unshift(0);
console.log(`New Length after Unshift: ${newLengthAfterUnshift}`);
console.log(`Array after unshift:`, arr);

//the with() method of Array instances creates a shallow copy of the array with the element at the specified index replaced by the provided value.
let newArrWith = arr.with(2, 99);
console.log(`New Array with index 2 replaced by 99:`, newArrWith);


// Note: There are many more array methods available in JavaScript. The above examples cover some of the most commonly used ones.

//Example of use of Map, Filter, and Reduce 

const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Pants", price: 80, category: "Clothing" },
];

const productsWithDiscount = products.map((product)=>{
    if (product.price<500) return product;
    return {...product, price: product.price * 0.9};// 10% discount for products over $500
});

const productNames=products.map(({name})=>name); // extract product names

const isCheapProduct= product=> product.price < 100;
const cheapProducts = products.filter(isCheapProduct); // filter cheap products

const totalPrice = products.reduce((total, product) => total + product.price, 0); // calculate total price of all products
