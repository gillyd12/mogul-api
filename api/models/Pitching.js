/**
 * Pitching.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identity: {type: 'string'},
    endurance: {type: 'string'},
    control: {type: 'string'},
    power: {type: 'string'},
    movement: {type: 'string'},
    mph: {type: 'string'},
    pitch_1: {type: 'string'},
    pitch_2: {type: 'string'},
    pitch_3: {type: 'string'},
    pitch_4: {type: 'string'},
    pitch_5: {type: 'string'},

    player_id: {
      type: 'string'
    },
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Pitching');

      if (obj) {
        resolve(DataService.load(Pitching,
          {
            identity: 'pitching',
            endurance: obj['End'],
            control: obj['Con2'],
            power: obj['Pow2'],
            movement: obj['Mov'],
            mph: obj['MPH'],
            pitch_1: obj['#1 Pitch'],
            pitch_2: obj['#2 Pitch'],
            pitch_3: obj['#3 Pitch'],
            pitch_4: obj['#4 Pitch'],
            pitch_5: obj['#5 Pitch']
          }, obj))
      } else {
        reject(new Error('obj is null in load of Pitching')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }
    });

    return promise;

  }

};

