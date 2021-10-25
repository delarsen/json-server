import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';

const Endpoints = {
  users: '/users',
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  const users = await response.json();

  return users;
};

const getSortedUsers = async (fields) => {
  const response = await fetch(`${apiBase}${Endpoints.users}?_sort=${fields}`);
  const users = await response.json();

  return users;
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};

// DELETE
const deleteUsers = async (id) => {
  await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  });
};

// PUT
const replaceUser = async (id, newUser) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newUser),
  });

  await newUserResponse.json();
};

// PATCH
const updateUser = async (id, field, value) => {
  const body = {};
  body[field] = value;

  await fetch(`${apiBase}${Endpoints.users}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(body),
  });
};

export {
  getUsers,
  addUser,
  deleteUsers,
  replaceUser,
  updateUser,
  getSortedUsers,
};

// add 10 - 30 random users
// delete 5 random users
// show oldest and youngest users
// replace 5 random users to random users
// show oldest and youngest users
// update 5 random users (random field for each user)
// show oldest and youngest users
// list all users in alphabet order. Sort by last name then by first name

// repeat 5 times on the same db
