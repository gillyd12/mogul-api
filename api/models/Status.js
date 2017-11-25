/**
 * Status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    injury_time : { type: 'string' },
    years_played : { type: 'string' },
    mlb_service : { type: 'string' },
    player_id: {
      type: 'string'
    },

  }
};

