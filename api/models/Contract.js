/**
 * Contract.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    type : { type: 'string' },
    salary : { type: 'string' },
    years : { type: 'string' },
    arbitration : { type: 'string' },
    free_agency : { type: 'string' },
    organizational_roster : { type: 'string' },
    player_option : { type: 'string' },
    team_option : { type: 'string' },
    no_trade : { type: 'string' },
    seeking : { type: 'string' },

    player_id: {
      type: 'string'
    },


  }
};

