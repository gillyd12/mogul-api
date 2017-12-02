/* global

sails
DataService
Statuses

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'statuses'
    },
    injury_time: {type: 'string'},
    years_played: {type: 'string'},
    mlb_service: {type: 'string'},
    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Statuses')

      if (obj) {
        resolve(DataService.load(Statuses,
          {
            injury_time: obj['Injured'],
            years_played: obj['Exp.'],
            mlb_service: obj['MLB Service']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Statuses')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
