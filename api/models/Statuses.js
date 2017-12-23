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
    injury_time: {type: 'integer'},
    years_played: {type: 'string'},
    mlb_service: {type: 'string'},
    roster: {type: 'string'},
    simYear: {type: 'string'},
    simNumber: {type: 'string'},

    player_id: {
      type: 'string'
    }
  },

  // enrich: function() {
  //
  //   let payload = []
  //   Statuses.find({
  //     // where: {
  //     //
  //     // },
  //     sort: 'createdAt DESC'
  //   })
  //     .then(function (statuses, err) {
  //
  //       for (let player of players) {
  //         if (player.statuses[0].injury_time > 0) {
  //           payload.push(player)
  //         }
  //       }
  //       return res.json(payload)
  //     })
  //     .catch(function (err) {
  //       sails.log.error(err)
  //       return res.json(payload)
  //     })
  //
  //
  // },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Statuses')

      if (obj) {
        resolve(DataService.load(Statuses,
          {
            injury_time: Number(obj['Injured']),
            years_played: obj['Exp.'],
            mlb_service: obj['MLB Service'],
            roster: obj['Roster'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number
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
