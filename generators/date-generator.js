/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getRandomIntInclusive } from '../util/util.js';

const getRandomBirthDate = (minAge, maxAge) => {
  const today = new Date();

  const birthDateDay = getRandomIntInclusive(1, today.getDate());
  const birthDateMonth = getRandomIntInclusive(0, today.getMonth());
  const birthDateYear =
    today.getFullYear() - getRandomIntInclusive(minAge, maxAge);

  const birthDate = new Date();
  birthDate.setDate(birthDateDay);
  birthDate.setMonth(birthDateMonth);
  birthDate.setFullYear(birthDateYear);

  return birthDate;
};

export { getRandomBirthDate };
