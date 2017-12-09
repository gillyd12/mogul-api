/* global

sails
Player

 */

module.exports = {

  /**
   * `PlayerController.name()`
   */
  name: function (req, res) {
    return res.json({
      todo: 'name() is not implemented yet!'
    })
  },

  // load: function (obj) {
  //   return new Promise(function (resolve, reject) {
  //     if (obj) {
  //       sails.log.info('Loading Player')
  //
  //       resolve(DataService.load(Player,
  //         {
  //           name: obj['Player Name'],
  //           player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
  //         }, obj))
  //     } else {
  //       reject(new Error('obj is null in load of Player')).then(function (error) {
  //         sails.log.error(error)
  //       }, function (error) {
  //         sails.log.error(error)
  //       })
  //     }
  //   })
  // },
  /*
      http://localhost:1337/player/contractByTeam?team=CHC
   */
  contractByTeam: function (req, res) {
    let payload = []
    Player.find()
      .populate('profile')
      .populate('rating', {
        limit: 1,
        sort: 'createdAt DESC'
      })
      .populate('statuses', {
        limit: 1,
        sort: 'createdAt DESC'
      })
      .populate('contract', {
        where: {
          organizational_roster: req.query.team
        },
        limit: 1,
        sort: 'createdAt DESC'
      })
      .then(function (players, err) {
        for (let player of players) {
          if (player.contract.length > 0) {
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

  // test: function (req, res) {
  //   // Player.find()
  //   //   .populate('vitals')
  //   //   .exec(function (err, players) {
  //   //
  //   //     'use strict'
  //   //     return res.json(players)
  //   //   })
  // }

}
