/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes : {

    player_id: {
      type: 'string'
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
      collection: 'contract',
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

    // player : {
    //
    //   // 1 to 1
    //   vitals: {
    //     via: "player"
    //   },
    //
    //   // 1 to 1
    //   profile : {
    //   },
    //
    //   // 1 to N
    //   status : {
    //   },
    //
    //   // 1 to N
    //   contract : {
    //   },
    //
    //   // 1 to N
    //   rating : {
    //
    //     offense : {
    //
    //     },
    //
    //     defense : {
    //
    //     },
    //
    //     pitching : {
    //
    //     }
    //
    //   },
    //
    //   // 1 to N
    //   // stats : {
    //   //
    //   //   games_played : { type: 'number'}
    //   //
    //   // }
    //
    // }

  }

};

