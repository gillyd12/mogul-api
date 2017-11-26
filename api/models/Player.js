/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes : {

    player_id: {
      type: 'string',
      unique: true
    },

    name: {
      type: 'string'
    },

    vitals: {
      model: 'vitals',
    },

    profile: {
      model: 'profile',
    },

    contract: {
      collection: 'contract'
    },

    rating: {
      collection: 'rating',
    },

    status: {
      collection: 'status',
    },

    offense: {
      collection: 'offense',
    },

    defense: {
      collection: 'defense',
    },

    pitching: {
      collection: 'pitching',
    }

  }

};

