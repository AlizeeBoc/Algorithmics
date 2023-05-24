//Write a function which receives a sentence full of whitespace and returns it without them.

let str = "Hello        Worl     d!    "

function removeWS (str) {
    let whithoutWS = str.replace(/\s/g, '');
    return whithoutWS;
}

console.log(removeWS(str))