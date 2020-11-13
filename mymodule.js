const favoriteFoods = ["pizza", "green apples", "rice", "saag paneer", "other indian foods", "rice and beans", "eggs"];

function printNewArray(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
    return input;
}

module.exports = {
    favoriteFoods,
    printNewArray
};