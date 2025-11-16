//MODULE PATTERN
//---------------------------------------------------------------------------------------------
//Module Pattern in JavaScript allows you to create private and public members within a module.
// It helps in encapsulating functionality and avoiding global namespace pollution.
const CounterModule = function(){
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },// public method
        reset: function() {
            count = 0;
            console.log('Count reset to 0');
        }// public method
    };
};

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2 //the module maintains its own state
CounterModule.reset();     // Count reset to 0
console.log(CounterModule.count); // undefined (private variable)
//---------------------------------------------------------------------------------------------

//FACTORY PATTERN
//---------------------------------------------------------------------------------------------
//Factory Pattern in JavaScript is a design pattern that provides a way to create objects without specifying the exact class of object that will be created.
// It allows for more flexibility and decoupling in object creation.
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);// creates a function that doubles the input
const triple = createMultiplier(3); // creates a function that triples the input
console.log(double(5)); // 10
console.log(triple(5)); // 15
//---------------------------------------------------------------------------------------------

//CLOSURES IN EVENT HANDLERS
//---------------------------------------------------------------------------------------------
//Closures in JavaScript allow functions to retain access to their lexical scope even when the function is executed outside that scope.

function setupButtonHandeler(buttonId, message) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function() {
        console.log(message); // 'message' is retained in the closure
    });
}
setupButtonHandeler('myButton', 'Button was clicked!');
// When the button with id 'myButton' is clicked, it will log 'Button was clicked!'
//---------------------------------------------------------------------------------------------