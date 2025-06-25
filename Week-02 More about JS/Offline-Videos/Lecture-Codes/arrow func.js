// Arrow functions are a shorter way to write functions in JavaScript.

// Traditional
function greet(name) {
    return "Hello " + name;
}

// Arrow
const greet = (name) => {
    return "Hello " + name;
}

// Even shorter if it's one line
const greet = name => "Hello " + name;


// Use arrow functions for short, anonymous functions — especially in methods like map, filter, forEach, etc.