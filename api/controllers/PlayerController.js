/* global

sails
Player
DataService

 */

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
      // .populate('rating', {
      //   limit: 1,
      //   sort: 'createdAt DESC',
      //   select: ['overall', 'peak']
      // })
      .populate('statuses', {
        limit: 1,
        sort: 'createdAt DESC',
        select: ['injury_time']
      })
      .then(function (players, err) {
        for (let player of players) {
          if (player.statuses[0].injury_time > 0) {
            player.expectedReturn = DataService.getExpectedReturn(sails.config.simulation.number, player.statuses[0].injury_time)
            payload.push(player)
          }
        }
        return res.json(payload)
      })
      .catch(function (err) {
        sails.log.error(err)
        return res.json(payload)
      })
  }

}
