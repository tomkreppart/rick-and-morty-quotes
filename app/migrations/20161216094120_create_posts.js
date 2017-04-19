
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', table => {
    table.increments()
    table.string("name").notNullable()
    table.text("bio").notNullable()
    table.string("voiceActor").notNullable()
    table.string("imageUrl").notNullable()
    table.integer("voteCount").defaultTo(0).notNullable()
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters')
}
