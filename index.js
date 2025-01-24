// Write your code here!
//Remove 'main' node

const main = document.querySelector('main');

main.remove();

//Create h1 node(element) and assign newHeader variable
const newHeader = document.createElement('h1');

newHeader.id = 'victory';

//Assign newHeader your name

newHeader.textContent = 'Victor is the champion'; 

document.body.appendChild(newHeader);