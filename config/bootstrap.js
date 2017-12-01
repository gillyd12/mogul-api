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

var XLSX = require('xlsx');

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  try {

    // parse data
    let workbook = XLSX.readFile('input/test.xls');
    let sheet_name_list = workbook.SheetNames;
    let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    // var xlData = [];

    // ES6 For of
    for (let values of xlData) {
      "use strict";

      let obj = {};
      let propNames = Object.getOwnPropertyNames(values);

      // ES6 For Of
      for (let value of propNames) {
        obj[_.trim(value)] = _.trim(values[value]);
      }

      async.series([
        function (callback) {
          Promise.resolve(Player.load(obj))
            .catch(function (error) {
              Promise.reject(sails.log.error(error));
            });
          callback();
        },
        function (callback) {
          async.parallel([
            function (callback) {
              Promise.resolve(Contract.load(obj).then(function (contract) {
                Player.addCollectionItem(contract, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {

              Promise.resolve(Defense.load(obj).then(function (defense) {
                Player.addCollectionItem(defense, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {

              Promise.resolve(Offense.load(obj).then(function (offense) {
                Player.addCollectionItem(offense, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {
              Promise.resolve(Profile.load(obj).then(function (profile) {
                let player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
                Player.update({player_id: player_id}, {profile: profile.id})
                  .then(function (data) {
                    sails.log.info(profile.identity + " collection added with " + profile.id + ' added to player');
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {

              Promise.resolve(Rating.load(obj).then(function (rating) {
                Player.addCollectionItem(rating, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {

              Promise.resolve(Pitching.load(obj).then(function (pitching) {
                Player.addCollectionItem(pitching, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();
            },
            function (callback) {

              Promise.resolve(Statuses.load(obj).then(function (status) {
                Player.addCollectionItem(status, obj)
                  .then(function (data) {
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();

            },
            function (callback) {
              Promise.resolve(Vitals.load(obj).then(function (vital) {
                let player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
                Player.update({player_id: player_id}, {vitals: vital.id})
                  .then(function (data) {
                    sails.log.info(vital.identity + " collection added with " + vital.id + ' added to player');
                  }).catch(function (error) {
                  Promise.reject(sails.log.error(error));
                })
              }).catch(function (error) {
                Promise.reject(sails.log.error(error));
              }));

              callback();

            },
            function (callback) {
              sails.log.info('Parsing is completed.');
              // return cb();
            }
          ])
        },
        function (callback) {
          sails.log.info('Parsing is completed.');
          // return cb();
        }
      ])
    }
  } catch (error) {
    sails.log.error(error);
  }

  cb();
};
