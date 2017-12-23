/* global

sails
DataService
Vitals

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'vitals'
    },
    name: {type: 'string'},
    age: { type: 'string' },
    height: { type: 'string' },
    weight: { type: 'string' },
    year_born: { type: 'string' },
    month_born: { type: 'string' },
    day_born: { type: 'string' },
    home_country: { type: 'string' },
    home_state: { type: 'string' },
    home_city: { type: 'string' },
    college: { type: 'string' },

    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Vitals')

      if (obj) {
        resolve(DataService.load(Vitals,
          {
            age: obj['Age'],
            height: obj['Height'],
            weight: obj['Weight'],
            year_born: obj['Born'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Vitals')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
