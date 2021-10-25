/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getRandomIntInclusive } from '../util/util.js';
import { getRandomBirthDate } from './date-generator.js';
import { getRandomFirstName, getRandomLastName } from './names-generator.js';

const getRandomUser = (minAge, maxAge) => ({
  firstName: getRandomFirstName(),
  lastName: getRandomLastName(),
  birthDate: getRandomBirthDate(minAge, maxAge),
});

export { getRandomUser };
