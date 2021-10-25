/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { addUser } from './api/user-api.js';
import { getRandomUser } from './generators/user-generator.js';
import { getRandomIntInclusive, rangeInclusive, sleep } from './util/util.js';
import * as reader from './reader.js';

// add from 10 to 30 random users
const main = async (usersCount) => {
  Promise.all(
    rangeInclusive(1, usersCount).map((_) => addUser(getRandomUser(13, 18)))
  ).then(async () => {
    for (let i = 0; i < 5; i++) {
      await sleep(100);
      await reader.main();
    }
  });
};

const usersCount = parseInt(getRandomIntInclusive(30, 50));

main(usersCount).then();
