/* global

sails
Simulation

 */

module.exports = {

  getDetails: function (req, res) {
    let payload = {}
    Simulation.find({
      limit: 1,
      sort: 'createdAt DESC'

    })
      .then(function (details, err) {
        // payload
        // for (let player of players) {
        //   if (player.statuses[0].injury_time > 0) {
        //     payload.push(player)
        //   }
        // }
        return res.json(details)
      })
      .catch(function (err) {
        sails.log.error(err)
        return res.json(payload)
      })
  }

}
