/* global

sails
DataService
Player

 */

module.exports = {

  attributes: {

    // player_id: {
    //   type: 'string',
    //   unique: true
    // },

    name: {
      type: 'string'
    },

    currentTeam: {
      type: 'string'
    },

    age: { type: 'string' },
    height: { type: 'string' },
    weight: { type: 'string' },
    year_born: { type: 'string' },
    month_born: { type: 'string' },
    day_born: { type: 'string' },
    home_country: { type: 'string' },
    home_state: { type: 'string' },
    home_city: { type: 'string' },
    college: { type: 'string' },
    position: { type: 'string' },
    bats: { type: 'string' },
    throws: { type: 'string' },
    draft_year: { type: 'string' },
    debut_date: { type: 'string' },
    debut_age: { type: 'string' },
    salary: {type: 'string'},
    years: {type: 'string'},
    arbitration: {type: 'string'},
    free_agency: {type: 'string'},
    organizational_roster: {type: 'string'},
    player_option: {type: 'string'},
    team_option: {type: 'string'},
    no_trade: {type: 'string'},
    seeking: {type: 'string'},
    simYear: {type: 'string'},
    simNumber: {type: 'string'},
    peak_at_draft: {type: 'string'},
    overall: {type: 'string'},
    peak: {type: 'string'},
    upside: {type: 'string'},
    health: {type: 'string'},
    happiness: {type: 'string'},
    scouting: {type: 'string'},
    injury_time: {type: 'string'},
    years_played: {type: 'string'},
    mlb_service: {type: 'string'},
    roster: {type: 'string'},
    contact: {type: 'string'},
    o_power: {type: 'string'},
    speed: {type: 'string'},
    eye: {type: 'string'},
    bunt: {type: 'string'},
    arm: { type: 'string' },
    range: { type: 'string' },
    fielding: { type: 'string' },
    handling: { type: 'string' },
    defense: { type: 'string' },
    endurance: {type: 'string'},
    control: {type: 'string'},
    p_power: {type: 'string'},
    movement: {type: 'string'},
    mph: {type: 'string'},
    pitch_1: {type: 'string'},
    pitch_2: {type: 'string'},
    pitch_3: {type: 'string'},
    pitch_4: {type: 'string'},
    pitch_5: {type: 'string'}



    // vitals: {
    //   model: 'vitals'
    // },
    //
    // profile: {
    //   model: 'profile'
    // },
    //
    // contract: {
    //   collection: 'contract'
    // },
    //
    // rating: {
    //   collection: 'rating'
    // },
    //
    // statuses: {
    //   collection: 'statuses'
    // },
    //
    // offense: {
    //   collection: 'offense'
    // },
    //
    // defense: {
    //   collection: 'defense'
    // },
    //
    // pitching: {
    //   collection: 'pitching'
    // }
  },

  load: function (obj) {
    return new Promise(function (resolve, reject) {
      if (obj) {
        sails.log.info('Loading Player')

        resolve(DataService.load(Player,
          {
            // player_id: obj['Player Name'] + obj['Born'] + obj['Weight'],
            name: obj['Player Name'],
            age: obj['Age'],
            height: obj['Height'],
            weight: obj['Weight'],
            year_born: obj['Born'],
            position: obj['P'],
            bats: obj['B'],
            throws: obj['T'],
            draft_year: obj['Draft Year'],
            debut_date: obj['Debut Date'],
            debut_age: obj['Debut Age'],
            salary: obj['Salary'],
            years: obj['Years'],
            arbitration: obj['Arbitration'],
            free_agency: obj['Free Agency'],
            organizational_roster: obj['Team'],
            player_option: obj['Player Option'],
            team_option: obj['Team Option'],
            no_trade: obj['No Trade'],
            seeking: obj['Seeking'],
            simYear: sails.config.simulation.year,
            simNumber: sails.config.simulation.number,
            peak_at_draft: obj['Peak @ Draft'],
            overall: obj['Overall'],
            peak: obj['Peak'],
            upside: obj['Upside'],
            health: obj['Health'],
            happiness: obj['Happiness'],
            scouting: obj['Scouting'],
            injury_time: obj['Injured'],
            years_played: obj['Exp.'],
            mlb_service: obj['MLB Service'],
            roster: obj['Roster'],
            contact: obj['Con'],
            o_power: obj['Pow'],
            speed: obj['Spd'],
            eye: obj['Eye'],
            bunt: obj['Bunt'],
            arm: obj['Arm'],
            range: obj['Rng'],
            fielding: obj['Fld'],
            handling: obj['Han'],
            defense: obj['Def'],
            endurance: obj['End'],
            control: obj['Con2'],
            p_power: obj['Pow2'],
            movement: obj['Mov'],
            mph: obj['MPH'],
            pitch_1: obj['#1 Pitch'],
            pitch_2: obj['#2 Pitch'],
            pitch_3: obj['#3 Pitch'],
            pitch_4: obj['#4 Pitch'],
            pitch_5: obj['#5 Pitch']
          }, obj))
      } else {
        reject(new Error('obj is null in load of Player')).then(function (error) {
          sails.log.error(error)
        }, function (error) {
          sails.log.error(error)
        })
      }
    })
  }

  // addCollectionItem: function (model, obj) {
  //   return new Promise(function (resolve, reject) {
  //     let playerId = obj['Player Name'] + obj['Born'] + obj['Weight']
  //
  //     resolve(Player.find({player_id: playerId}).populate(model.identity)
  //       .then(function (player) {
  //         if (player && player !== undefined) {
  //           if (model.identity === 'contract') {
  //             player[0].currentTeam = model.organizational_roster
  //           }
  //           Object.entries(player[0]).forEach(([key, value]) => {
  //             if (key === model.identity) {
  //               value.add([model.id])
  //               player[0].addToCollection(function (error) {
  //                 if (error && error !== undefined) {
  //                   reject(error)
  //                 }
  //               })
  //               sails.log.info(model.identity + ' collection added with ' + model.id + ' added to player')
  //             }
  //           })
  //         }
  //       }))
  //   })
  // }

}
