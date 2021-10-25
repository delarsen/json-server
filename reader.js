/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import {
  getSortedUsers,
  getUsers,
  replaceUser,
  updateUser,
} from './api/user-api.js';
import { deleteUsers } from './api/user-api.js';
import { getRandomUser } from './generators/user-generator.js';
import * as utils from './util/util.js';

const replaceRandomUsers = async (users) => {
  console.log('\nreplace 5 random users:');
  for (const userId of utils.getUserIds(users, 5)) {
    await replaceUser(userId, getRandomUser(13, 18));
    await utils.sleep(100);
  }
};

const updateRandomUsers = async (users) => {
  console.log('\nupdate 5 random users:');
  for (const userId of utils.getUserIds(users, 5)) {
    console.log('id to update: ', userId);
    const field = utils.getRandomField();
    const value = utils.generateRandomValue(field);

    await updateUser(userId, field, value);
    await utils.sleep(100);
  }
};

const deleteRandomUsers = async (users) => {
  console.log('\ndelete 5 random users:');
  for (const userId of utils.getUserIds(users, 5)) {
    await deleteUsers(userId);
    await utils.sleep(100);
  }
};

const showUsers = (users) => {
  console.log(utils.formatUsers(users, utils.usersFormatterWithBirthdate));
  utils.showOldestAndYoungest(users);
};

const main = async () => {
  console.log('all users: ');
  let users = await getUsers();
  console.log(utils.formatUsers(users, utils.usersFormatter));
  await utils.sleep(100);

  await deleteRandomUsers(users);
  users = await getUsers();
  showUsers(users);

  await replaceRandomUsers(users);
  users = await getUsers();
  showUsers(users);

  await updateRandomUsers(users);
  users = await getUsers();
  showUsers(users);

  console.log('\nall users in alphabet order:');
  const sortedUsers = await getSortedUsers('lastName,firstName');
  console.log(utils.formatUsers(sortedUsers, utils.usersFormatter));
};

export { main };
