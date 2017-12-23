/* global

sails
DataService
Pitching

 */

module.exports = {

  attributes: {
    identity: {
      type: 'string',
      defaultsTo: 'pitching'
    },
    endurance: {type: 'string'},
    control: {type: 'string'},
    power: {type: 'string'},
    movement: {type: 'string'},
    mph: {type: 'string'},
    pitch_1: {type: 'string'},
    pitch_2: {type: 'string'},
    pitch_3: {type: 'string'},
    pitch_4: {type: 'string'},
    pitch_5: {type: 'string'},
    simYear: {type: 'string'},
    simNumber: {type: 'string'},

    player_id: {
      type: 'string'
    }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      sails.log.info('Loading Pitching')

      if (obj) {
        resolve(DataService.load(Pitching,
          {
            endurance: obj['End'],
            control: obj['Con2'],
            power: obj['Pow2'],
            movement: obj['Mov'],
            mph: obj['MPH'],
            pitch_1: obj['#1 Pitch'],
            pitch_2: obj['#2 Pitch'],
            pitch_3: obj['#3 Pitch'],
            pitch_4: obj['#4 Pitch'],
            pitch_5: obj['#5 Pitch'],
            player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number
          }, obj))
      } else {
        reject(new Error('obj is null in load of Pitching')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

}
