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

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  // parse data
  var workbook = XLSX.readFile('input/test-min.xls');
  var sheet_name_list = workbook.SheetNames;
  var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

  // normalize data
  var trimmedDataSet = [];

  _.forEach(xlData, function (values) {
    var obj = {};
    "use strict";
    var propNames = Object.getOwnPropertyNames(values);
    _.forEach(propNames, function (value, key) {
      obj[_.trim(value)] = _.trim(values[value]);
    })
    // trimmedDataSet.push(obj);

    async.series([
      function (callback) {
        sails.log.info('Loading Player');
        DataService.load(Player,
          {
            name: obj['Player Name']
            // player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
            // age: obj['Age'],
            // height: obj['Height'],
            // weight: obj['Weight'],
            // year_born: obj['Born']
            // month_born: obj['Exp.'],
            // day_born: obj['Exp.'],
            // home_country: obj['Exp.'],
            // home_state: obj['MLB Service'],
            // home_city: obj['Exp.'],
            // college: obj['Exp.']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Player.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })

          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Contract');
        DataService.load(Contract,
          {
            type: obj['Contract'],
            salary: obj['Salary'],
            years: obj['Years'],
            arbitration: obj['Arbitration'],
            free_agency: obj['Free Agency'],
            organizational_roster: obj['Team'],
            player_option: obj['Player Option'],
            team_option: obj['Team Option'],
            no_trade: obj['No Trade'],
            seeking: obj['Seeking']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Contract.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Defense');
        DataService.load(Defense,
          {
            arm: obj['Arm'],
            range: obj['Rng'],
            fielding: obj['Fld'],
            handling: obj['Han'],
            defense: obj['Def']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Defense.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Offense');
        DataService.load(Offense,
          {
            contact: obj['Con'],
            power: obj['Pow'],
            speed: obj['Spd'],
            eye: obj['Eye'],
            bunt: obj['Bunt']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Offense.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Pitching');
        DataService.load(Pitching,
          {
            endurance: obj['End'],
            // control: obj['Con'], need array number, duplicate with offense
            // power: obj['Pow'], need array number, duplicate with offense
            movement: obj['Mov'],
            mph: obj['MPH'],
            pitch_1: obj['#1 Pitch'],
            pitch_2: obj['#2 Pitch'],
            pitch_3: obj['#3 Pitch'],
            pitch_4: obj['#4 Pitch'],
            pitch_5: obj['#5 Pitch']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Pitching.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Profile');
        DataService.load(Profile,
          {
            position: obj['P'],
            bats: obj['B'],
            throws: obj['T'],
            draft_year: obj['Draft Year'],
            debut_date: obj['Debut Date'],
            debut_age: obj['Debut Age']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Profile.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Rating');
        DataService.load(Rating,
          {
            peak_at_draft: obj['Peak @ Draft'],
            overall: obj['Overall'],
            peak: obj['Peak'],
            upside: obj['Upside'],
            health: obj['Health'],
            happiness: obj['Happiness'],
            scouting: obj['Scouting']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Rating.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Status');
        DataService.load(Status,
          {
            injury_time: obj['Injured'],
            years_played: obj['Exp.'],
            mlb_service: obj['MLB Service']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Status.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Loading Vitals');
        DataService.load(Vitals,
          {
            age: obj['Age'],
            height: obj['Height'],
            weight: obj['Weight'],
            year_born: obj['Born'],
            // month_born: obj['Exp.'],
            // day_born: obj['Exp.'],
            // home_country: obj['Exp.'],
            // home_state: obj['MLB Service'],
            // home_city: obj['Exp.'],
            // college: obj['Exp.']
          }, obj)
          .then(function (data) {
            var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
            var identity = Vitals.identity;

            // sails.log.info(this.keyModel.identity + " " + data.id + " created");
            // primary_key = data.id;
            return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
              .then(function (data) {
                sails.log.info('keyModel ' + data.id + " created");
              })
              .catch(function (error) {
                sails.log.error(error);
              })
          })
          .catch(function (error) {
            sails.log.error(error);
          });
        callback();

      },
      function (callback) {
        sails.log.info('Parsing is completed.');
        // return cb();
      }
    ])
  })
  cb();
};

//     DataService.load(Player,
//       {
//         name: obj['Player Name']
//         // player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
//         // age: obj['Age'],
//         // height: obj['Height'],
//         // weight: obj['Weight'],
//         // year_born: obj['Born']
//         // month_born: obj['Exp.'],
//         // day_born: obj['Exp.'],
//         // home_country: obj['Exp.'],
//         // home_state: obj['MLB Service'],
//         // home_city: obj['Exp.'],
//         // college: obj['Exp.']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Player.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Contract,
//       {
//       type: obj['Contract'],
//       salary: obj['Salary'],
//       years: obj['Years'],
//       arbitration: obj['Arbitration'],
//       free_agency: obj['Free Agency'],
//       organizational_roster: obj['Team'],
//       player_option: obj['Player Option'],
//       team_option: obj['Team Option'],
//       no_trade: obj['No Trade'],
//       seeking: obj['Seeking']
//     }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Contract.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Defense,
//       {
//         arm: obj['Arm'],
//         range: obj['Rng'],
//         fielding: obj['Fld'],
//         handling: obj['Han'],
//         defense: obj['Def']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Defense.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Offense,
//       {
//         contact: obj['Con'],
//         power: obj['Pow'],
//         speed: obj['Spd'],
//         eye: obj['Eye'],
//         bunt: obj['Bunt']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Offense.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Pitching,
//       {
//         endurance: obj['End'],
//         // control: obj['Con'], need array number, duplicate with offense
//         // power: obj['Pow'], need array number, duplicate with offense
//         movement: obj['Mov'],
//         mph: obj['MPH'],
//         pitch_1: obj['#1 Pitch'],
//         pitch_2: obj['#2 Pitch'],
//         pitch_3: obj['#3 Pitch'],
//         pitch_4: obj['#4 Pitch'],
//         pitch_5: obj['#5 Pitch']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Pitching.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Profile,
//       {
//         position: obj['P'],
//         bats: obj['B'],
//         throws: obj['T'],
//         draft_year: obj['Draft Year'],
//         debut_date: obj['Debut Date'],
//         debut_age: obj['Debut Age']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Profile.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Rating,
//       {
//         peak_at_draft: obj['Peak @ Draft'],
//         overall: obj['Overall'],
//         peak: obj['Peak'],
//         upside: obj['Upside'],
//         health: obj['Health'],
//         happiness: obj['Happiness'],
//         scouting: obj['Scouting']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Rating.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Status,
//       {
//         injury_time: obj['Injured'],
//         years_played: obj['Exp.'],
//         mlb_service: obj['MLB Service']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Status.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//     DataService.load(Vitals,
//       {
//         age: obj['Age'],
//         height: obj['Height'],
//         weight: obj['Weight'],
//         year_born: obj['Born'],
//         // month_born: obj['Exp.'],
//         // day_born: obj['Exp.'],
//         // home_country: obj['Exp.'],
//         // home_state: obj['MLB Service'],
//         // home_city: obj['Exp.'],
//         // college: obj['Exp.']
//       }, obj)
//       .then(function (data) {
//         var player_id = obj['Player Name'] + obj['Born'] + obj['Weight'];
//         var identity = Vitals.identity;
//
//         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
//         // primary_key = data.id;
//         return Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
//           .then(function (data) {
//             sails.log.info('keyModel ' + data.id + " created");
//           })
//           .catch(function (error) {
//             sails.log.error(error);
//           })
//       })
//       .catch(function (error) {
//         sails.log.error(error);
//       });
//
//   });
//
//   cb();
// };

// module.exports.bootstrap = function(cb) {
//
//   // It's very important to trigger this callback method when you are finished
//   // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
//
//   // parse data
//   var workbook = XLSX.readFile('input/test-min.xls');
//   var sheet_name_list = workbook.SheetNames;
//   var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
//
//   // normalize data
//   var trimmedDataSet = [];
//
//   _.forEach(xlData, function(values) {
//     var obj = {};
//     "use strict";
//     var propNames = Object.getOwnPropertyNames(values);
//     _.forEach(propNames, function(value, key) {
//       obj[_.trim(value)] = _.trim(values[value]);
//     })
//     // trimmedDataSet.push(obj);
//
//     DataService.load(Player,
//       {
//         name: obj['Player Name']
//         // player_id: obj['Player Name'] + obj['Born'] + obj['Weight']
//         // age: obj['Age'],
//         // height: obj['Height'],
//         // weight: obj['Weight'],
//         // year_born: obj['Born']
//         // month_born: obj['Exp.'],
//         // day_born: obj['Exp.'],
//         // home_country: obj['Exp.'],
//         // home_state: obj['MLB Service'],
//         // home_city: obj['Exp.'],
//         // college: obj['Exp.']
//       }, obj);
//
//     DataService.load(Contract,
//       {
//         type: obj['Contract'],
//         salary: obj['Salary'],
//         years: obj['Years'],
//         arbitration: obj['Arbitration'],
//         free_agency: obj['Free Agency'],
//         organizational_roster: obj['Team'],
//         player_option: obj['Player Option'],
//         team_option: obj['Team Option'],
//         no_trade: obj['No Trade'],
//         seeking: obj['Seeking']
//       }, obj);
//
//     DataService.load(Defense,
//       {
//         arm: obj['Arm'],
//         range: obj['Rng'],
//         fielding: obj['Fld'],
//         handling: obj['Han'],
//         defense: obj['Def']
//       }, obj);
//
//     DataService.load(Offense,
//       {
//         contact: obj['Con'],
//         power: obj['Pow'],
//         speed: obj['Spd'],
//         eye: obj['Eye'],
//         bunt: obj['Bunt']
//       }, obj);
//
//     DataService.load(Pitching,
//       {
//         endurance: obj['End'],
//         // control: obj['Con'], need array number, duplicate with offense
//         // power: obj['Pow'], need array number, duplicate with offense
//         movement: obj['Mov'],
//         mph: obj['MPH'],
//         pitch_1: obj['#1 Pitch'],
//         pitch_2: obj['#2 Pitch'],
//         pitch_3: obj['#3 Pitch'],
//         pitch_4: obj['#4 Pitch'],
//         pitch_5: obj['#5 Pitch']
//       }, obj);
//
//     DataService.load(Profile,
//       {
//         position: obj['P'],
//         bats: obj['B'],
//         throws: obj['T'],
//         draft_year: obj['Draft Year'],
//         debut_date: obj['Debut Date'],
//         debut_age: obj['Debut Age']
//       }, obj);
//
//     DataService.load(Rating,
//       {
//         peak_at_draft: obj['Peak @ Draft'],
//         overall: obj['Overall'],
//         peak: obj['Peak'],
//         upside: obj['Upside'],
//         health: obj['Health'],
//         happiness: obj['Happiness'],
//         scouting: obj['Scouting']
//       }, obj);
//
//     DataService.load(Status,
//       {
//         injury_time: obj['Injured'],
//         years_played: obj['Exp.'],
//         mlb_service: obj['MLB Service']
//       }, obj);
//
//     DataService.load(Vitals,
//       {
//         age: obj['Age'],
//         height: obj['Height'],
//         weight: obj['Weight'],
//         year_born: obj['Born'],
//         // month_born: obj['Exp.'],
//         // day_born: obj['Exp.'],
//         // home_country: obj['Exp.'],
//         // home_state: obj['MLB Service'],
//         // home_city: obj['Exp.'],
//         // college: obj['Exp.']
//       }, obj);
//
//   });
//
//   cb();
// };


// var dataService = require("../api/services/DataTransferService");
// var parser = require("../api/services/ParserService");
//
// module.exports.bootstrap = function (cb) {
//
//   async.series([
//     function (callback) {
//       sails.log.info('Loading League');
//       League.init(callback, ['AL', 'NL']);
//     },
//     function (callback) {
//       sails.log.info('Loading Team');
//       Team.init(callback);
//     },
//     function (callback) {
//       sails.log.info('Loading Game');
//       dataService.reload(callback, Game);
//     },
//     function (callback) {
//       sails.log.info('Loading Statistic');
//       dataService.reload(callback, Statistic);
//     },
//     function (callback) {
//       sails.log.info('Loading Record');
//       dataService.reload(callback, Record);
//     },
//     // function (callback) {
//     //   sails.log.info('Record was loaded.');
//     //   dataService.reload(callback, Player);
//     // },
//     // function (callback) {
//     //   sails.log.info('Player was loaded.');
//     //   dataService.reload(callback, Participant);
//     // },
//     // function (callback) {
//     //   sails.log.info('Participant was loaded.');
//     //   parser.moveDirectoryContent(callback, "input", "output");
//     // },
//     function (callback) {
//       sails.log.info('Parsing is completed.');
//       return cb();
//     }
//   ])
// };
