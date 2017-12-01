/**
 * Defense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'defense'
    },
    arm : { type: 'string' },
    range : { type: 'string' },
    fielding : { type: 'string' },
    handling : { type: 'string' },
    defense : { type: 'string' },

    player_id: {
      type: 'string'
    },

  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Defense');

        if (obj) {
          resolve(DataService.load(Defense,
            {
              arm: obj['Arm'],
              range: obj['Rng'],
              fielding: obj['Fld'],
              handling: obj['Han'],
              defense: obj['Def']
            }, obj)
          )
        } else {
          reject(new Error('obj is null in load of Defense')).then(function (error) {
            // not called
          }, function (error) {
            sails.log.error(error);
          });
        }
    });

    return promise;

  }

};

