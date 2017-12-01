/**
 * Status.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    identity: {type: 'string'},
    injury_time: {type: 'string'},
    years_played: {type: 'string'},
    mlb_service: {type: 'string'},
    player_id: {
      type: 'string'
    },
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Statuses');

      if (obj) {
        resolve(DataService.load(Statuses,
          {
            identity: 'statuses',
            injury_time: obj['Injured'],
            years_played: obj['Exp.'],
            mlb_service: obj['MLB Service']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Statuses')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }

    });

    return promise;

  }

};

