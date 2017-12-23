/* global

sails
DataService
Offense

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
    simYear: {type: 'string'},
    simNumber: {type: 'string'},

    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Offense')

      if (obj) {
        resolve(DataService.load(Offense,
          {
            contact: obj['Con'],
            power: obj['Pow'],
            speed: obj['Spd'],
            eye: obj['Eye'],
            bunt: obj['Bunt'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Offense')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
