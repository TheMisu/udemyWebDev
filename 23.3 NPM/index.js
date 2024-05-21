// var generateName = require("sillyname");
import generateName from "sillyname";
import {randomSuperhero} from "superheroes";

// random name generator
var sillyName = generateName();
console.log(`My name is ${sillyName}.\n`);

// superhero name generator
var superheroName = randomSuperhero();
console.log(`I am ${superheroName}!`);