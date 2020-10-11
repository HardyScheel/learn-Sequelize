const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  userService.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

function getAll(req, res, next) {
  userService.getAll()
    .then(user => res.json(user))
}

function getById(req, res, next) {
  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(next);
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(next);
}

function _delete(req, res, next) {
  userService.delete(req.params.id)
    .then(() => res.json({ message: 'User deleted successfully' }))
    .catch(next);
}
