
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', table => {
    table.increments()
    table.text("content")
    table.string("soundUrl")
    table.integer("character_id").index().references("id").inTable("characters").onDelete("cascade").notNull()
    table.dateTime("createdAt").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quotes')
}
