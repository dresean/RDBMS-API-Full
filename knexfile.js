// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/sprintdb.sqlite3'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './database/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'Sprint',
      user:     'root',
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
