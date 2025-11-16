//Asynchronous programming in JavaScript lets you perform work that completes later without blocking the main thread. The primary primitives are Promises and async/await built on the event loop. Mastery means you can create, chain, race, and cancel asynchronous flows; handle errors robustly; reason about ordering and concurrency; debug timing issues; and choose patterns that match performance and correctness needs.

//PROMISES
//----------------------------------------------------------------------
//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Create and chain
//Chaining: .then returns a new Promise; return values become resolved values; throwing or returning a rejected Promise flows to .catch.

const promise = new Promise((resolve, reject) => {  resolve();}); // immediately resolved


promise.then(() => {console.log('first');})
.then (() => {console. log('second');}) // this .then waits for the previous to complete
.then (() => {console.log('third');})
.catch((error) =>{console.log('error', error);});// handles any error in the chain
// Output:
// first
// second
// third

//in this example we introduce delays using setTimeout 
promise.then (() => {console. log('first');})
.then (() => { setTimeout(() => {console.log('second')}, 2000);})
.then (() => {setTimeout (() =>{ console.log('third');}, 1000);})
.catch((error) =>{console.log('error', error);});
// Output:
// first
// third (1 second after 'first')
// second (2 seconds after 'first')

promise.then(() => {console.log('first');})
.then(()=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('second');
            resolve();
        }, 2000);
    });
})
.then(() => {
    setTimeout(() => {
        console.log('third');
    }, 1000);
})
.catch((error) =>{console.log('error', error);});
// Output:
// first
// second (2 seconds after 'first')
// third (1 second after 'second')
//this happens because the second .then waits for the Promise to resolve before proceeding and the microtask queue processes Promise resolutions before macrotasks like setTimeout

//----------------------------------------------------------------------
//ASYNC/AWAIT
//----------------------------------------------------------------------
//Async/await is syntactic sugar over Promises, making asynchronous code look and behave like synchronous code using the async and await keywords.

const data = [{
        id: 1,
        title: 'Iron Man',
        year: 2008
    },{
        id: 2,
        title: 'Spiderman: Homecoming',
        year: 2017
    },{
        id: 3,
        title: 'Avengers: Endgame',
        year: 2019
    }];
//const getDatos = () => {
//return datos;
//}

// const getData = () => {
//     setTimeout(() => {
//         return data;
//     },1500);
// } 

// console. log(getData());    //this will be undefine 

const getData = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
        },1500);
    })
} 
// getData().then((data)=>console.log(data))
// .catch(err=>console.log(err))

async function fetchData (){
    //the await keyword needs to be use in an async function
    const dataFetched = await getData(); //we wait till the data gets fetched 
    console.log(dataFetched)

}
fetchData();

// async: marks a function that returns a Promise. await pauses execution of the async function until the awaited Promise settles, resuming with the fulfilled value or throwing if rejected.
// await: pauses the async function and hands control back to the event loop, queuing the remaining execution as a microtask; it does not block the thread.

// Example with try catch 

async function loadUserAndPosts(userId) {
  try {
    const user = await fetchJson(`/api/users/${userId}`);
    const posts = await fetchJson(`/api/users/${userId}/posts`);
    return { user, posts };
  } catch (err) {
    // local recovery or rethrow for upstream handling
    console.error('failed to load', err);
    throw err;
  }
}

// Concurrent fetching with async/await
async function loadAll(ids) {
  const promises = ids.map(id => fetchJson(`/api/${id}`));
  const results = await Promise.all(promises); // concurrent
  return results;
}

