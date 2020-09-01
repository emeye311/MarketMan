// ./ : Same Folder
// ../ : One Folder Up 

// // Destructuring:
// const emeye = {
//     name: 'Emeye',
//     job: 'Software Develepoer at Facebook'
// }

// // const myName = emeye.name;
// // const myJob = emeye.job;

// const { name, job } = emeye;


const { num, name } = require('./routes/product')
console.log(`My name is ${name}`)
