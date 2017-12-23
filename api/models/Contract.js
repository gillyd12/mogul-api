/* global

sails
DataService
Contract

 */

module.exports = {

  attributes: {

    identity: {
      type: 'string',
      defaultsTo: 'contract'
    },
    salary: {type: 'string'},
    years: {type: 'string'},
    arbitration: {type: 'string'},
    free_agency: {type: 'string'},
    organizational_roster: {type: 'string'},
    player_option: {type: 'string'},
    team_option: {type: 'string'},
    no_trade: {type: 'string'},
    seeking: {type: 'string'},
    simYear: {type: 'string'},
    simNumber: {type: 'string'},

    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      if (obj) {
        sails.log.info('Loading Contract')

        resolve(DataService.load(Contract,
          {
            salary: obj['Salary'],
            years: obj['Years'],
            arbitration: obj['Arbitration'],
            free_agency: obj['Free Agency'],
            organizational_roster: obj['Team'],
            player_option: obj['Player Option'],
            team_option: obj['Team Option'],
            no_trade: obj['No Trade'],
            seeking: obj['Seeking'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number
      }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Contract')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
