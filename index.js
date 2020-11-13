const {favoriteFoods, printNewArray} = require("./mymodule");
const merge = require('deepmerge');
const objectAssign = require('object-assign');
// var react = require('react');

printNewArray(favoriteFoods);
let merged = merge.all([favoriteFoods]);
console.log(merged);

let input1 = favoriteFoods[0];
let input2 = favoriteFoods[1];
let input3 = favoriteFoods[2];
objectAssign({input1: 0}, {input2: 1});
//=> {foo: 0, bar: 1}

// multiple sources
objectAssign({input1: 0}, {input2: 1}, {input3: 2});
//=> {foo: 0, bar: 1, baz: 2}

// overwrites equal keys
objectAssign({foo: 0}, {foo: 1}, {foo: 2});
//=> {foo: 2}

// ignores null and undefined sources
objectAssign({foo: 0}, null, {bar: 1}, undefined);
//=> {foo: 0, bar: 1}


const createReactPlayer = require('react-player').createReactPlayer
const Player = require('/react-player/soundcloud.js').default
module.exports = createReactPlayer([{
  key: 'soundcloud',
  canPlay: Player.canPlay,
  lazyPlayer: Player
}])







