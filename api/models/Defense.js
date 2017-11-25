/**
 * Defense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    arm : { type: 'string' },
    range : { type: 'string' },
    fielding : { type: 'string' },
    handling : { type: 'string' },
    defense : { type: 'string' },

    player_id: {
      type: 'string'
    },

  }
};

