// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}


//INCOMPLETE

function appendCat(name) {
       const appendCat = [...cats, "Broom"];
       return appendCat;
 }


//INCOMPLETE

//This function below should create a new array with "arnold" as index=0, then ...cats

function prependCat(name) {
    const prependCat = ["Arnold",...cats];
    return prependCat;
}

//INCOMPLETE

function removeLastCat() {
    const removeLastCat = cats.slice();
    removeLastCat.pop();
    return removeLastCat;
    
}

function removeFirstCat() {
    const removeFirstCat = cats.slice();
    removeFirstCat.shift();
    return removeFirstCat;
}

// function removeFirstCat() {

// }


