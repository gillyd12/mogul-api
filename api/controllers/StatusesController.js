/* global

Statuses
Player
sails
DataService

 */

let _ = require('lodash')

module.exports = {

  injuryReport: function (req, res) {
    let payload = []

    Statuses.find({
      where: { injury_time: { '>': 0 } },
      sort: 'createdAt DESC'
    })
      .then(function (statuses, err) {
        let v = []
        _.forEach(statuses, function (value, key) {
          v.push(value.player_id)
        })
        return Player.find({
          where: {
            player_id: v
          },
          sort: 'currentTeam ASC'
          })
          .populate('profile', {
            select: ['position']
          })
          .populate('statuses', {
            limit: 1,
            sort: 'createdAt DESC',
            select: ['injury_time', 'roster']
          })
          .then(function (players, err) {
            for (let player of players) {
              if (player.statuses[0].injury_time > 0) {
                player.expectedReturn = DataService.getExpectedReturn(sails.config.simulation.number, player.statuses[0].injury_time)
                payload.push(player)
              }
            }
            // return res.json(_.groupBy(payload, 'currentTeam'))
            return res.json(payload)
          })
          .catch(function (err) {
            sails.log.error(err)
            return res.json(payload)
          })
      })
      .catch(function (err) {
        sails.log.error(err)
        return res.json(payload)
      })
  }

}
