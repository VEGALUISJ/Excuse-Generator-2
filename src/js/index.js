/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let pronoun = ["The "];
let subject = ["Clown ", "Police ", "Girl ", "Bear ", "Dog "];
let action = ["stole my ", "took my ", "ate my ", "break my "];
let posetion = ["car ", "keys ", "money ", "underwear ", "homework "];
let where = ["on the beach. ", "in my house. ", "in my car. "];

let excuse =
  pronoun[Math.floor(Math.random() * pronoun.length)] +
  subject[Math.floor(Math.random() * subject.length)] +
  action[Math.floor(Math.random() * action.length)] +
  posetion[Math.floor(Math.random() * posetion.length)];
where[Math.floor(Math.random() * where.length)];

console.log(excuse);

let pe = document.querySelector("#excuse");
pe.innerHTML = excuse;
