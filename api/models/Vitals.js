/**
 * Vitals.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {type: 'string'},
    age : { type: 'string' },
    height : { type: 'string' },
    weight : { type: 'string' },
    year_born : { type: 'string' },
    month_born : { type: 'string' },
    day_born : { type: 'string' },
    home_country : { type: 'string' },
    home_state : { type: 'string' },
    home_city : { type: 'string' },
    college : { type: 'string' },

    player_id: {
      type: 'string'
    },

    // player: {
    //   model: 'player'
    // }

  }
};

