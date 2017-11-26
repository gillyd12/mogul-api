/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `PlayerController.name()`
   */
  name: function (req, res) {
    return res.json({
      todo: 'name() is not implemented yet!'
    });
  },

  test: function (req, res) {
    Player.find()
      .populate('vitals')
      .exec(function(err, players) {
        "use strict";
        return res.json(players);
      })
  }

};

