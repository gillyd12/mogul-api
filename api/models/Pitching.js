/**
 * Pitching.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    endurance : { type: 'string' },
    control : { type: 'string' },
    power : { type: 'string' },
    movement : { type: 'string' },
    mph : { type: 'string' },
    pitch_1 : { type: 'string' },
    pitch_2 : { type: 'string' },
    pitch_3 : { type: 'string' },
    pitch_4 : { type: 'string' },
    pitch_5 : { type: 'string' },

    player_id: {
      type: 'string'
    },

  }
};

