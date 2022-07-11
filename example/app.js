//import { focusElements } from "../src/main.js";

const getButton = document.querySelector('#get-module');
const getAgain = document.querySelector('#get-again');


function load() {
  import('../dist/module.js').then((module) => {
    let elemts = new module.focusElements();
    console.log(elemts.get());
  });
}


if(getButton) {
  getButton.addEventListener('click', () => {
    load();
  })
}

if(getAgain){
  getAgain.addEventListener('click', () => {
    load();
  })
}