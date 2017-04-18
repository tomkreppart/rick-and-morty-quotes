const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/:character_id/quotes', (req, res, next) => {
  knex('quotes')
    .where({character_id: req.params.character_id})
    .then(quotes => res.json(quotes))
    .catch(err => next(err))
})

router.post('/:character_id/quotes', validate, (req, res, next) => {
  knex('quotes')
    .insert({content: req.body.content, character_id: req.params.character_id})
    .where({character_id: req.params.character_id})
    .returning('*')
    .then(quotes => res.json(quotes[0]))
    .catch(err => next(err))
})

router.patch('/:character_id/quotes/:id', validate, (req, res, next) => {
  knex('quotes')
    .update({content: req.body.content})
    .where({character_id: req.params.character_id, id: req.params.id})
    .returning('*')
    .then(quotes => res.json(quotes[0]))
    .catch(err => next(err))
})

router.delete('/:character_id/quotes/:id', (req, res, next) => {
  knex('quotes')
    .del()
    .where({character_id: req.params.character_id, id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

function validate(req, res, next) {
  const errors = [];
  ['content'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router
