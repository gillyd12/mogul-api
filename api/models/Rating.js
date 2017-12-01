/**
 * Rating.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identity: {type: 'string'},
    peak_at_draft: {type: 'string'},
    overall: {type: 'string'},
    peak: {type: 'string'},
    upside: {type: 'string'},
    health: {type: 'string'},
    happiness: {type: 'string'},
    scouting: {type: 'string'},
    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Rating');

      if (obj) {
        resolve(DataService.load(Rating,
          {
            identity: 'rating',
            peak_at_draft: obj['Peak @ Draft'],
            overall: obj['Overall'],
            peak: obj['Peak'],
            upside: obj['Upside'],
            health: obj['Health'],
            happiness: obj['Happiness'],
            scouting: obj['Scouting']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Rating')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }

    });

    return promise;

  }

};

