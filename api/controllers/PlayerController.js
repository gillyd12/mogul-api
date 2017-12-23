/* global

sails
Player
DataService
 */

let _ = require('lodash')

module.exports = {

  contractByTeam: function (req, res) {
    let payload = []

    Player.find({
      where: {
        currentTeam: req.query.team
      },
      select: ['name']
    })
      .populate('profile', {
        select: ['position']
      })
      // .populate('contract', {
      //   where: {
      //     organizational_roster: req.query.team
      //   },
      //   limit: 1,
      //   sort: 'createdAt DESC',
      //   select: ['salary', 'years']
      // })
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
        let p = _.orderBy(payload, ['expectedReturn.days'], ['desc'])
        return res.json(p)
        // return res.json(payload)
      })
      .catch(function (err) {
        sails.log.error(err)
        return res.json(payload)
      })
  }

}
