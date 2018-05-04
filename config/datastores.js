/**
 * THIS FILE WAS ADDED AUTOMATICALLY by the Sails 1.0 app migration tool.
 */

module.exports.datastores = {

  // In previous versions, datastores (then called 'connections') would only be loaded
  // if a model was actually using them.  Starting with Sails 1.0, _all_ configured
  // datastores will be loaded, regardless of use.  So we'll only include datastores in
  // this file that were actually being used.  Your original `connections` config is
  // still available as `config/connections-old.js.txt`.

  // mongolabs: {
  //   adapter: 'sails-mongo',
  //   host: process.env.mogul_mongo_host, // defaults to `localhost` if omitted
  //   port: process.env.mogul_mongo_port, // defaults to 27017 if omitted
  //   user: process.env.mogul_mongo_username, // or omit if not relevant
  //   password: process.env.mogul_mongo_password, // or omit if not relevant
  //   database: process.env.mogul_mongo_database // or omit if not relevant
  // },

  mongolabsBeta: {
    adapter: 'sails-mongo',
    host: process.env.mogul_mongo_host_beta, // defaults to `localhost` if omitted
    port: process.env.mogul_mongo_port_beta, // defaults to 27017 if omitted
    user: process.env.mogul_mongo_username_beta, // or omit if not relevant
    password: process.env.mogul_mongo_password_beta, // or omit if not relevant
    database: process.env.mogul_mongo_database_beta // or omit if not relevant
  }

};
