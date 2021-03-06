/* global

sails
DataService
Defense

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'defense'
    },
    arm: { type: 'string' },
    range: { type: 'string' },
    fielding: { type: 'string' },
    handling: { type: 'string' },
    defense: { type: 'string' },
    simYear: {type: 'string'},
    simNumber: {type: 'string'},

    player_id: {
      type: 'string'
    }

  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Defense')

      if (obj) {
        resolve(DataService.load(Defense,
          {
            arm: obj['Arm'],
            range: obj['Rng'],
            fielding: obj['Fld'],
            handling: obj['Han'],
            defense: obj['Def'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Defense')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
