/**
 * Profile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identity: {type: 'string'},
    position : { type: 'string' },
    bats : { type: 'string' },
    throws : { type: 'string' },
    draft_year : { type: 'string' },
    debut_date : { type: 'string' },
    debut_age : { type: 'string' },
    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      sails.log.info('Loading Profile');

      if (obj) {
        resolve(DataService.load(Profile,
          {
            identity: 'profile',
            position: obj['P'],
            bats: obj['B'],
            throws: obj['T'],
            draft_year: obj['Draft Year'],
            debut_date: obj['Debut Date'],
            debut_age: obj['Debut Age']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Profile')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }

    });

    return promise;

  }

};

