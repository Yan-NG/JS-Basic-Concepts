// string methods
let str = "   Hello, JavaScript World!   ";

// trim()
let trimmedStr = str.trim();
console.log(`Trimmed String: '${trimmedStr}'`);

// toUpperCase()
let upperStr = str.toUpperCase();
console.log(`Uppercase String: '${upperStr}'`);

// toLowerCase()
let lowerStr = str.toLowerCase();
console.log(`Lowercase String: '${lowerStr}'`);

// includes()
let includesJS = str.includes("JavaScript");
console.log(`Includes 'JavaScript': ${includesJS}`);

// replace()
let replacedStr = str.replace("JavaScript", "JS");
console.log(`Replaced String: '${replacedStr}'`);

// split()
let wordsArray = str.trim().split(" ");
console.log(`Words Array:`, wordsArray);

//at()
let charAtIndex5 = str.at(5);
console.log(`Character at index 5: '${charAtIndex5}'`);

//charAt()
let charAtIndex7 = str.charAt(7);
console.log(`Character at index 7: '${charAtIndex7}'`);

//concat()
let concatenatedStr = str.concat(" Let's learn more!");
console.log(`Concatenated String: '${concatenatedStr}'`);

//endsWith()
let endsWithWorld = str.trim().endsWith("World!");
console.log(`Ends with 'World!': ${endsWithWorld}`);

//startsWith()
let startsWithHello = str.trim().startsWith("Hello");
console.log(`Starts with 'Hello': ${startsWithHello}`);

//indexOf()
let indexOfJavaScript = str.indexOf("JavaScript");
console.log(`Index of 'JavaScript': ${indexOfJavaScript}`);

//match()
let matchResult = str.match(/JavaScript/);
console.log(`Match result for 'JavaScript':`, matchResult);

//matchAll()
let matchAllResult = str.matchAll(/a/g);
console.log(`MatchAll result for 'a':`, Array.from(matchAllResult));

//replaceAll()
let replaceAllStr = str.replaceAll("a", "A");
console.log(`ReplaceAll result: '${replaceAllStr}'`);

//search()
let searchIndex = str.search(/JavaScript/);
console.log(`Search index for 'JavaScript': ${searchIndex}`);

//slice(indexStart, indexEnd)
let slicedStr = str.slice(3, 15);
console.log(`Sliced String (3-15): '${slicedStr}'`);
//slice parameters can be negative as well
let negativeSlicedStr = str.slice(-20, -8);
console.log(`Sliced String with negative indices (-20 to -8): '${negativeSlicedStr}'`);
//the parameters can be omitted
let sliceFromIndex5 = str.slice(5);
console.log(`Sliced String from index 5: '${sliceFromIndex5}'`);
let sliceToIndex10 = str.slice(0, 10);
console.log(`Sliced String to index 10: '${sliceToIndex10}'`);

//substring(indexStart, indexEnd)
let substringStr = str.substring(3, 15);
console.log(`Substring (3-15): '${substringStr}'`);
//substring parameters cannot be negative
let substringStr2 = str.substring(0, 10);
console.log(`Substring (0-10): '${substringStr2}'`);
//the parameters can be omitted
let substringFromIndex5 = str.substring(5);
console.log(`Substring from index 5: '${substringFromIndex5}'`);
let substringToIndex10 = str.substring(0, 10);
console.log(`Substring to index 10: '${substringToIndex10}'`);
