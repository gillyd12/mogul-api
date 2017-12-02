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
            bunt: obj['Bunt']
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
