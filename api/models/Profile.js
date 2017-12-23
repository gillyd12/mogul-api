/* global

sails
DataService
Profile

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'profile'
    },
    position: { type: 'string' },
    bats: { type: 'string' },
    throws: { type: 'string' },
    draft_year: { type: 'string' },
    debut_date: { type: 'string' },
    debut_age: { type: 'string' },
    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Profile')

      if (obj) {
        resolve(DataService.load(Profile,
          {
            position: obj['P'],
            bats: obj['B'],
            throws: obj['T'],
            draft_year: obj['Draft Year'],
            debut_date: obj['Debut Date'],
            debut_age: obj['Debut Age'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
          }, obj)
        )
      } else {
        reject(new Error('obj is null in load of Profile')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
