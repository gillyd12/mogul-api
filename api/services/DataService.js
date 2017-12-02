/* global

sails

 */

module.exports = {

  load: function (model, object, nativeObj) {
    'use strict'
    let playerId = nativeObj['Player Name'] + nativeObj['Born'] + nativeObj['Weight']

    return new Promise(function (resolve, reject) {
      try {
        if (nativeObj) {
          if (model.identity === 'player') {
            resolve(model.findOrCreate({player_id: playerId}, object))
          } else {
            resolve(model.create(object))
          }
        } else {
          reject(new Error('nativeObj is null in load of DataService')).then(function (error) {
            sails.log.error(error)
          }, function (error) {
            sails.log.error(error)
          })
        }
      } catch (error) {
        sails.log.error(error)
      }
    })
  }
}
