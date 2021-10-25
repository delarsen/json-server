import * as names from '../generators/names-generator.js';
import * as dates from '../generators/date-generator.js';

const getRandomIntInclusive = (min, max) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

const rangeInclusive = (from, to) => {
  const lowIndex = Math.min(from, to);
  const highIndex = Math.max(from, to);
  const count = highIndex - lowIndex + 1;

  const indexes = Array.from(new Array(count).keys());

  return indexes.map((index) => index + lowIndex);
};

const formatUsers = (users, formatter) =>
  users.map((user) => formatter(user)).join('\n');

const usersFormatter = (user) =>
  `${user.id}, ${user.firstName}, ${user.lastName}`;

const usersFormatterWithBirthdate = (user) =>
  `${user.id}, ${user.firstName}, ${user.lastName}, ${user.birthDate}`;

const getUserIds = (users, number) => {
  const userIds = users.map((user) => user.id);
  return userIds.sort(() => Math.random() - Math.random()).slice(0, number);
};

const showOldestAndYoungest = (users) => {
  const sortedByBirthDate = users.sort(
    (a, b) => new Date(a.birthDate) - new Date(b.birthDate)
  );
  console.log(
    'oldest: ',
    formatUsers([sortedByBirthDate[0]], usersFormatterWithBirthdate)
  );
  console.log(
    'youngest: ',
    formatUsers(
      [sortedByBirthDate[sortedByBirthDate.length - 1]],
      usersFormatterWithBirthdate
    )
  );
};

const getRandomField = () => {
  const fields = ['firstName', 'lastName', 'birthDate'];
  return fields.sort(() => Math.random() - Math.random())[0];
};

const generateRandomValue = (field) => {
  let value = null;

  switch (field) {
    case 'firstName':
      value = names.getRandomFirstName();
      break;
    case 'lastName':
      value = names.getRandomLastName();
      break;
    case 'birthDate':
      value = dates.getRandomBirthDate(13, 18);
      break;
    default:
      break;
  }

  return value;
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export {
  getRandomIntInclusive,
  rangeInclusive,
  formatUsers,
  usersFormatter,
  usersFormatterWithBirthdate,
  getUserIds,
  showOldestAndYoungest,
  getRandomField,
  generateRandomValue,
  sleep,
};
