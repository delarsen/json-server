/* eslint-disable no-console */
import fetch from 'node-fetch';
import * as readline from 'readline';

const usersEndpoint = 'http://localhost:3000/users';

const firstNames = [
  'Joe',
  'Paul',
  'John',
  'Arsen',
  'Ashot',
  'Michael',
  'Sam',
  'Jack',
];
const lastNames = [
  'Elsher',
  'Solace',
  'Delikatny',
  'Levine',
  'Thatcher',
  'Raven',
  'Hansley',
  'Bardot',
];

const getUsers = async () => {
  const response = await fetch(usersEndpoint);
  const users = await response.json();

  return users;
};

const addRandomUsers = async (numberOfUsers) => {
  for (let i = 1; i <= numberOfUsers; i++) {
    const user = generateUser(i);
    await addUser(user);
  }
};

const addUser = async (user) => {
  await fetch(usersEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });
};

const randomDate = () => {
  const start = new Date(2003, 10, 20);
  const end = new Date(2008, 10, 20);

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateUser = (indx) => {
  const firstNameRandomIndx = Math.floor(Math.random() * firstNames.length);
  const lastNameRandomIndx = Math.floor(Math.random() * lastNames.length);

  return {
    id: indx,
    firstName: firstNames[firstNameRandomIndx],
    lastName: lastNames[lastNameRandomIndx],
    birthDate: randomDate(),
  };
};

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter number: ', async (number) => {
    const numberOfUsers = Number.parseInt(number);
    if (isNaN(numberOfUsers)) {
      throw Error('Not a number!!');
    }

    await addRandomUsers(numberOfUsers);

    console.log(await getUsers());
    rl.close();
  });
};

main().then();
