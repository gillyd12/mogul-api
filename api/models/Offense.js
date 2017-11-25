/**
 * Offense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    contact : { type: 'string' },
    power : { type: 'string' },
    speed : { type: 'string' },
    eye : { type: 'string' },
    bunt : { type: 'string' },

    player_id: {
      type: 'string'
    },

  }
};

