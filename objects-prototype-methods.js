//Object Prototype Methods Examples
//------------------------------------------------------------------------------------------------------------------
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const targetObj = { a: 1, b: 2 };
const sourceObj1 = { b: 4, c: 5 };
const sourceObj2 = { d: 6 };
const assignedObj = Object.assign(targetObj, sourceObj1, sourceObj2);
console.log(`Assigned Object:`, assignedObj);

// the spread operator (...) can also be used to achieve similar results
const spreadObj = { ...targetObj, ...sourceObj1, ...sourceObj2 };
console.log(`Spread Object:`, spreadObj);

//The Object.keys() static method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const objForKeys = { x: 10, y: 20, z: 30 };
const keysArray = Object.keys(objForKeys);
console.log(`Object Keys:`, keysArray);

//The Object.values() static method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
const valuesArray = Object.values(objForKeys);
console.log(`Object Values:`, valuesArray);

//Object Handling Example
//---------------------------------------------------------------------------------------------------------------------------
//Shallow vs Deep Copy (concepts)
//There are a few ways to copy objects in JavaScript.

const originalObject={prop:'Value of original object'}
//Shallow Copy using Object.assign()
//A shallow is a copy where only the immediate properties of an object; nested objects/arrays remain references to the same memory. In this cases there's a risk of unintentionaly modifying the original object when changing the copy.


const a = { x: 1, nested: { v: 2 } };
const b = Object.assign({}, a);
// or using spread
const c = { ...a };
b.nested === a.nested; // true (same reference)
console.log(`Object A`)
console.log(a);
console.log(`Shallow Copy B using Object.assign()`)
console.log(b);
console.log(`Shallow Copy C using Spread Operator`)
console.log(c);
console.log(`Shallow Copy - b.nested === a.nested:`, b.nested === a.nested); // true


// A solution could be using JSON methods
//This works if you don't have a function nasted in the object or special objects like Date, Map, Set, etc.
const deepCopy2 = JSON.parse(JSON.stringify(deepOriginal));
console.log(`Deep Copied Object using JSON methods:`)
console.log(deepCopy2);
console.log(`Deep Copy 2 - deepCopy2.nested === deepOriginal.nested:`, deepCopy2.nested === deepOriginal.nested); // false

//Object.freeze()
//The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
const freezeObj = { prop1: "I am frozen", prop2: 42, nested: { v: 2 }  };
Object.freeze(freezeObj);
freezeObj.prop1 = "Attempt to change"; // This will fail silently in non-strict mode or throw a TypeError in strict mode
freezeObj.nested.v = 99; // This will succeed because nested object is not frozen
console.log(`Frozen Object after attempted changes:`, freezeObj);

//Deep Clone Examples

//Robust Recursive Deep Clone (basic version)
const deepClone = (obj) => {

    if (typeof obj !== "object" || obj === null) return obj; // Return the value if obj is not an object
    const newObject = Array. isArray(obj) ? [] : {}; // Create an array or object to hold the values

    for (let key in obj) {
        const value = obj[key];
        // recursive call for nested objects & arrays
        newObject[key] = deepClone(value);
    }

    return newObject;   
};
const deepOriginal_recursive = { x: 1, nested: { v: 2 } };
const deepCopy_recursive = deepClone(deepOriginal_recursive);
console.log(`Deep Original Object (recursive):`)
console.log(deepOriginal_recursive);
console.log(`Deep Copied Object using recursive function:`)
console.log(deepCopy_recursive);
console.log(`Deep Copy Recursive - deepCopy_recursive.nested === deepOriginal_recursive.nested:`, deepCopy_recursive.nested === deepOriginal_recursive.nested); // false    



//Deep Copy using structuredClone()
//A deep copy creates a new object and recursively copies all properties from the original object, including nested objects/arrays. This ensures that changes to the copy do not affect the original object.
const deepOriginal = { x: 1, nested: { v: 2 } };
const deepCopy = Object.structuredClone(deepOriginal);
console.log(`Deep Original Object:`)
console.log(deepOriginal);
console.log(`Deep Copied Object using structuredClone():`)
console.log(deepCopy);
console.log(`Deep Copy - deepCopy.nested === deepOriginal.nested:`, deepCopy.nested === deepOriginal.nested); // false

//Note: structuredClone() is a modern method and may not be supported in all environments. For older environments, libraries like Lodash provide deep cloning functionality.

