/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

/* global

sails
async
Player
Simulation
Team

 */

let XLSX = require('xlsx')
let _ = require('lodash')

module.exports.bootstrap = function (cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  // todo -- bring these into configurations
  let inputFolder = 'input/data'
  let runDataLoad = false
  let fileName = ['2077-1',
                  '2077-2',
                  '2077-3',
                  '2077-4',
                  '2077-5',
                  '2077-6',
                  '2077-7',
                  '2077-8',
                  '2077-9',
                  '2077-10',
                  '2077-11',
                  '2077-12',
                  '2077-13']

  for (let file of fileName) {
    // set unique data for simulation
    let d = _.split(file, '-', 2)
    sails.config.simulation.year = d[0]
    sails.config.simulation.number = d[1]

    // parse data
    var xlData = []
    if (runDataLoad) {
      let workbook = XLSX.readFile(inputFolder + '/' + file + '.xls')
      xlData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])

      // ES6 For of
      // noinspection JSDeclarationsAtScopeStart
      for (let values of xlData) {
        let obj = {}
        let propNames = Object.getOwnPropertyNames(values)

        // ES6 For Of
        for (let value of propNames) {
          obj[_.trim(value)] = _.trim(values[value])
        }

        async.series([
          function (callback) {
            Promise.resolve(Player.load(obj))
              .catch(function (error) {
                Promise.reject(sails.log.error(error))
              })
            sails.log.info('Parsing ' + sails.config.simulation.year + '-' + sails.config.simulation.number)

            callback()
          },
          // function (callback) {
          //   async.parallel([
          //     function (callback) {
          //       Promise.resolve(Contract.load(obj).then(function (contract) {
          //         Player.addCollectionItem(contract, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Defense.load(obj).then(function (defense) {
          //         Player.addCollectionItem(defense, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Offense.load(obj).then(function (offense) {
          //         Player.addCollectionItem(offense, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Profile.load(obj).then(function (profile) {
          //         let playerId = obj['Player Name'] + obj['Born'] + obj['Weight']
          //         Player.update({player_id: playerId}, {profile: profile.id})
          //           .then(function (data) {
          //             sails.log.info(profile.identity + ' collection added with ' + profile.id + ' added to player')
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Rating.load(obj).then(function (rating) {
          //         Player.addCollectionItem(rating, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Pitching.load(obj).then(function (pitching) {
          //         Player.addCollectionItem(pitching, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Statuses.load(obj).then(function (status) {
          //         Player.addCollectionItem(status, obj)
          //           .then(function (data) {
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       Promise.resolve(Vitals.load(obj).then(function (vital) {
          //         let playerId = obj['Player Name'] + obj['Born'] + obj['Weight']
          //         Player.update({player_id: playerId}, {vitals: vital.id})
          //           .then(function (data) {
          //             sails.log.info(vital.identity + ' collection added with ' + vital.id + ' added to player')
          //           }).catch(function (error) {
          //           Promise.reject(sails.log.error(error))
          //         })
          //       }).catch(function (error) {
          //         Promise.reject(sails.log.error(error))
          //       }))
          //
          //       callback()
          //     },
          //     function (callback) {
          //       sails.log.info('Parsing is completed.')
          //       // return cb();
          //     }
          //   ])
          // },
          function (callback) {
            sails.log.info('Parsing is completed.')
            // return cb();
          }
        ])
      }
    }
  }
  Promise.resolve(Team.init())
    .catch(function (error) {
      Promise.reject(sails.log.error(error))
    })

  Promise.resolve(Simulation.init())
    .catch(function (error) {
      Promise.reject(sails.log.error(error))
    })

  cb()
}
