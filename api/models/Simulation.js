/* global

sails
Simulation
m

 */

let m = require('moment')

module.exports = {

  attributes: {
    simYear: {
      type: 'string',
      defaultsTo: '2000'
    },

    simNumber: {
      type: 'string',
      defaultsTo: '0'
    },

    realLifeSimTime: {
      type: 'string',
      defaultsTo: '0'
    },

    realLifeSimDate: {
      type: 'string',
      defaultsTo: '0'
    }

  },

  init: async function () {
    try {
      let millis = m().valueOf()
      let date = m().toDate()
      sails.log.info('Loading Simulation')
      await Simulation.create({
        simYear: sails.config.simulation.year,
        simNumber: sails.config.simulation.number,
        realLifeSimTime: millis,
        realLifeSimDate: date
      })
    } catch (error) {
      sails.log.error(error)
    }
  }

}
