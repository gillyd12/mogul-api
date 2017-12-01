/**
 * Player.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

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

    statuses: {
      collection: 'statuses',
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
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      try {

        if (obj) {

          sails.log.info('Loading Player');

          resolve(DataService.load(Player,
            {
              name: obj['Player Name'],
              player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
            }, obj))

        } else {
          reject(new Error('obj is null in load of Player')).then(function (error) {
            // not called
          }, function (error) {
            sails.log.error(error);
          });
        }
      } catch (error) {
        sails.log.error(error);
      }
    });

    return promise;

  },

  addCollectionItem: function (model, obj) {

    let promise = new Promise(function (resolve, reject) {

      let player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];

      resolve(Player.find({player_id: player_id}).populate(model.identity)
        .then(function (player) {
          if (player && player != undefined) {
            Object.entries(player[0]).forEach(([key, value]) => {
              if (key === model.identity) {
                value.add([model.id]);
                player[0].save(function (error) {
                  if (error && error != undefined) {
                    reject(error);
                  }
                });
                sails.log.info(model.identity + " collection added with " + model.id + ' added to player');
              }
            });
          }

        }));

    });

    return promise;
  },

};

