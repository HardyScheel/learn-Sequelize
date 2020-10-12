require('rootpath')();
const express = require('express');
const router = express.Router();

const db = require('_helpers/db');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  const user = await db.User.findAll();
  return user.map(x => basicDetails(x));
}

async function getById(id) {
  const user = await getUser(id);
  return basicDetails(user);
}

async function create(params) {
  const user = new db.User(params);

  // save user
  await user.save();

  return basicDetails(user);
}

async function update(id, params) {
  const user = await getUser(id);

  // copy params to user and save
  Object.assign(user, params);
  user.updated = Date.now();
  await user.save();

  return basicDetails(user);
}

async function _delete(id) {
  const user = await getUser(id);
  await user.destroy();
}

// helper functions

async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw 'User not found';
  return user;
}

function basicDetails(user) {
  const { id, userId, firstName, lastName, created, updated } = user;
  return { id, userId, firstName, lastName, created, updated };
}
