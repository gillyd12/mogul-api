/* global

sails
DataService
Rating

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'rating'
    },
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
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Rating')

      if (obj) {
        resolve(DataService.load(Rating,
          {
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
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
