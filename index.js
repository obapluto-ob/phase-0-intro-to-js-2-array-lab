const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);  // ✅ This modifies `cats`
}

function destructivelyPrependCat(name) {
    cats.unshift(name);  // ✅ This modifies `cats`
}

function destructivelyRemoveLastCat() {
    cats.pop();  // ✅ This modifies `cats`
}

function destructivelyRemoveFirstCat() {
    cats.shift();  // ✅ This modifies `cats`
}

function appendCat(name) {
    return [...cats, name];  // ✅ Returns new array
}

function prependCat(name) {
    return [name, ...cats];  // ✅ Returns new array
}

function removeLastCat() {
    return cats.slice(0, -1);  // ✅ Returns new array
}

function removeFirstCat() {
    return cats.slice(1);  // ✅ Returns new array
}
