/* eslint-disable import/extensions */
import { getRandomIntInclusive } from '../util/util.js';

const firstNames = [
  'Olivia',
  'Oliver',
  'Amelia',
  'George',
  'Isla',
  'Harry',
  'Ava',
  'Noah',
  'Paul',
  'Jack',
  'Sophia',
  'Charlie',
  'Grace',
  'Leo',
  'Mia',
  'Jacob',
  'Arsen',
  'Freddie',
  'Ella',
  'Jorge',
];

const getRandomIndex = (array) => getRandomIntInclusive(0, array.length - 1);

const getRandomArrayMember = (array) => array[getRandomIndex(array)];

const getRandomFirstName = () => getRandomArrayMember(firstNames);

const getRandomLastName = () => getRandomArrayMember(firstNames);

export { getRandomFirstName, getRandomLastName };
