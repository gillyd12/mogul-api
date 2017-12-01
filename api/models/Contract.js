/**
 * Contract.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    identity: {type: 'string'},
    salary: {type: 'string'},
    years: {type: 'string'},
    arbitration: {type: 'string'},
    free_agency: {type: 'string'},
    organizational_roster: {type: 'string'},
    player_option: {type: 'string'},
    team_option: {type: 'string'},
    no_trade: {type: 'string'},
    seeking: {type: 'string'},

    player_id: {
      type: 'string'
    },
  },

  load: function (obj) {

    let promise = new Promise(function (resolve, reject) {

      if (obj) {

        sails.log.info('Loading Contract');

        resolve(DataService.load(Contract,
          {
            identity: 'contract',
            salary: obj['Salary'],
            years: obj['Years'],
            arbitration: obj['Arbitration'],
            free_agency: obj['Free Agency'],
            organizational_roster: obj['Team'],
            player_option: obj['Player Option'],
            team_option: obj['Team Option'],
            no_trade: obj['No Trade'],
            seeking: obj['Seeking']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Contract')).then(function (error) {
          // not called
        }, function (error) {
          sails.log.error(error);
        });
      }
    })

    return promise;

  }

};

