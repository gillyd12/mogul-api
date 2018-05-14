/* global

sails

 */

module.exports = {

  load: function (model, object, nativeObj) {
    'use strict'
    // let playerId = nativeObj['Player Name'] + nativeObj['Born'] + nativeObj['Weight']

    return new Promise(function (resolve, reject) {
      try {
        if (nativeObj) {
          resolve(model.create(object))
          // if (model.identity === 'player') {
          //   resolve(model.findOrCreate({player_id: playerId}, object))
          // } else {
          //   resolve(model.create(object))
          // }
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
  },

  getExpectedReturn: function (s, injuryTime) {

    let payload = {}
    let futureSim = 0
    let currentSim = Number(s)

    if (injuryTime <= 14) {
      futureSim = currentSim + 1
    } else if (injuryTime <= 28) {
      futureSim = currentSim + 2
    } else if (injuryTime <= 42) {
      futureSim = currentSim + 3
    } else if (injuryTime <= 56) {
      futureSim = currentSim + 4
    } else if (injuryTime <= 60) {
      futureSim = currentSim + 5
    } else if (injuryTime <= 74) {
      futureSim = currentSim + 6
    } else if (injuryTime <= 88) {
      futureSim = currentSim + 7
    } else if (injuryTime <= 102) {
      futureSim = currentSim + 8
    } else if (injuryTime <= 116) {
      futureSim = currentSim + 9
    } else if (injuryTime <= 130) {
      futureSim = currentSim + 10
    } else if (injuryTime <= 144) {
      futureSim = currentSim + 11
    } else if (injuryTime <= 158) {
      futureSim = currentSim + 12
    } else if (injuryTime <= 172) {
      futureSim = currentSim + 13
    } else if (injuryTime <= 186) {
      futureSim = currentSim + 14
    } else {
      futureSim = currentSim + 15
    }

    let outForSeason = false

    if ((futureSim - currentSim) > (15 - currentSim)) {
      outForSeason = true
    }

    payload.outForSeason = outForSeason
    payload.expectedReturn = futureSim
    payload.days = Number(injuryTime)

    return payload
  }
}
