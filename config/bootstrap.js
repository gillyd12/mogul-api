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
Player
Team
Simulation
 */

let XLSX = require('xlsx')
let _ = require('lodash')
let fs = require('fs')
let async = require('async')
let chokidar = require('chokidar')
let inputFolder = './input/'
let outputFolder = './output/'

module.exports.bootstrap = function (cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  var watcher = chokidar.watch(inputFolder, {
    ignored: '*.gitignore',
    persistent: true
  })

  watcher.on('add', (path, stats) => {
    let filename = path.substring(path.indexOf('/') + 1, path.length)
    if (filename !== '.gitignore') {
      let name = filename.substring(0, filename.indexOf('.'))
      store(name)
      fs.rename(inputFolder + filename, outputFolder + filename, function () {
        console.log(path + ' moved')
      })
    }
  })
  loadTeams()
  setSimYearAndNumber()
  cb()
}

const loadTeams = async () => {
  try {
    Team.init()
  } catch (error) {
    sails.log.error(error)
  }
}

const setSimYearAndNumber = async () => {
  const simulations = await Simulation.find({})
  if (simulations) {
    let sims = _.pullAllBy(simulations, [{ 'simNumber': 'draft' }], 'simNumber')
    let arr = []
    sims.map(function (item) {
      let object = {
        number: 0,
        year: 0
      }
      object.number = parseInt(item.simNumber)
      object.year = parseInt(item.simYear)
      arr.push(object)
    })
    let sorted = _.orderBy(arr, ['year', 'number'], ['desc', 'desc'])
    if (sorted && sorted[0]) {
      sails.config.simulation.year = sorted[0].year
      sails.config.simulation.number = sorted[0].number
    }
  }
}

const store = async (file) => {
  try {
    // set unique data for simulation
    let d = _.split(file, '-', 2)
    sails.config.simulation.year = d[0]
    sails.config.simulation.number = d[1]

    Simulation.init()

    // parse data
    var xlData = []
    let workbook = XLSX.readFile(inputFolder + file + '.xls')
    xlData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    console.log('Loading Players.')
    let players = []
    for (let values of xlData) {
      let obj = {}
      let propNames = Object.getOwnPropertyNames(values)

      // ES6 For Of
      for (let value of propNames) {
        obj[_.trim(value)] = _.trim(values[value])
      }
      players.push(Player.load(obj))
    }
    workbook = null
    xlData = null
    await Player.createEach(players)
    console.log('Loading Players Complete')
    console.log('Parsing is completed.')
  } catch (error) {
    sails.log.error(error)
  }
}
