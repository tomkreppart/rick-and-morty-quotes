const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/', (req, res, next) => {
  knex('characters')
    .then(characters => {
      return knex('quotes')
        .whereIn('character_id', characters.map(p => p.id))
        .then((quotes) => {
          const quotesByCharacterId = quotes.reduce((result, quote) => {
            result[quote.character_id] = result[quote.character_id] || []
            result[quote.character_id].push(quote)
            return result
          }, {})
          characters.forEach(character => {
            character.quotes = quotesByCharacterId[character.id] || []
          })
          res.json(characters)
        })
    })
    .catch(err => next(err))
})

router.post('/', validate, (req, res, next) => {
  knex('characters')
    .insert(params(req))
    .returning('*')
    .then(characters => res.json(characters[0]))
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  knex('characters')
    .where({id: req.params.id})
    .first()
    .then(character => res.json(character))
    .catch(err => next(err))
})

router.patch('/:id', validate, (req, res, next) => {
  knex('characters')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(characters => res.json(characters[0]))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('characters')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

router.post('/:id/votes', (req, res, next) => {
  knex('characters')
    .update('voteCount', knex.raw('voteCount + 1'))
    .where({id: req.params.id})
    .then( () => knex('characters').where({id: req.params.id}).first() )
    .then( character => res.json({voteCount: character.voteCount}))
    .catch(err => next(err))
})

router.delete('/:id/votes', (req, res, next) => {
  knex('characters')
    .update('voteCount', knex.raw('voteCount - 1'))
    .where({id: req.params.id})
    .then( () => knex('characters').where({id: req.params.id}).first() )
    .then( character => res.json({voteCount: character.voteCount}))
    .catch(err => next(err))
})

function params(req) {
  return {
    name: req.body.name,
    bio: req.body.bio,
    voiceActor: req.body.voiceActor,
    imageUrl: req.body.imageUrl,
  }
}

function validate(req, res, next) {
  const errors = [];
  ['name', 'bio', 'voiceActor', 'imageUrl'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router
