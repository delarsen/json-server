//import fetch from 'node-fetch';error!+ async/await /realize number and date from real time
const firstNames = ["Joe", "Mary", "John", "Arsen", "Ashot", "Michael", "Sam", "Jack"]
const lastNames = ["Elsher", "Solace", "Delikatny", "Levine", "Thatcher", "Raven", "Hansley", "Bardot"]
const randFirstName = Math.floor(Math.random() * firstNames.length);
const randLastName = Math.floor(Math.random() * lastNames.length);
// console.log(firstNames[randFirstName]);
// console.log(lastNames[randLastName]);



function randomDate() {
    let startDate = new Date(2003,10,20).getTime();
    let endDate = new Date(2008,10,20).getTime();
    let spaceBeetween = (endDate - startDate)
    let timestamp = Math.round(Math.random() * spaceBeetween);
    timestamp += startDate;
    return new Date(timestamp);

}

let dateOfBirth = randomDate();


const user = {
    firstName: firstNames[randFirstName],
    lastName: lastNames[randLastName],
    birthDate: dateOfBirth,
} 

console.log(user);