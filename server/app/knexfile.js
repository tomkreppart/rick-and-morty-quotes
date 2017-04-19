module.exports = {

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'rick-and-morty-quotes',
  },

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone-test',
    }
  }

};
