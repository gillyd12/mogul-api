/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    position : { type: 'string' },
    bats : { type: 'string' },
    throws : { type: 'string' },
    draft_year : { type: 'string' },
    debut_date : { type: 'string' },
    debut_age : { type: 'string' },
    player_id: {
      type: 'string'
    }

  }
};

