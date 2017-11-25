/**
 * Rating.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    peak_at_draft : { type: 'string' },
    overall : { type: 'string'},
    peak : { type: 'string' },
    upside : { type: 'string' },
    health : { type: 'string' },
    happiness : { type: 'string' },
    scouting : { type: 'string' },
    player_id: {
      type: 'string'
    },

  }
};

