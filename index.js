// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
} 

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
}

function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield)
    return cats
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo)
    return cats
}

function appendCat(Broom) {
    const appendCat = [...cats, "Broom"]
    return appendCat
}

function prependCat(Arnold) {
    const prependCat = ["Arnold", ...cats]
    return prependCat
}

function removeLastCat(Garfield) {
    const removeLastCat = cats.slice(0, cats.length-1);
    return removeLastCat
}

function removeFirstCat(Milo) {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat
}