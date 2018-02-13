// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/sprintdb.sqlite3'
    },
    useNullAsDefaul: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directors: './database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'Sprint',
      user:     'username',
      password: 'jUh9wkpinedLC0wUiDrahighd0H2riaateachyK'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  }

};
