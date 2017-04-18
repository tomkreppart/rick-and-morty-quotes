module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'reddit-clone',
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
