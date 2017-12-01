/**
 * Offense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'offense'
    },
    contact: {type: 'string'},
    power: {type: 'string'},
    speed: {type: 'string'},
    eye: {type: 'string'},
    bunt: {type: 'string'},

    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Offense');

      if (obj) {
        resolve(DataService.load(Offense,
          {
            contact: obj['Con'],
            power: obj['Pow'],
            speed: obj['Spd'],
            eye: obj['Eye'],
            bunt: obj['Bunt']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Offense')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }

    });

    return promise;

  }

};

