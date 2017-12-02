var XLSX = require('xlsx')

module.exports = function myHook (sails) {
  {
    defaults: {
      __configKey__: {
        _hookTimeout: 20000 // wait 20 seconds before timing out
      }
    }
  }

  return {

    initialize: function (cb) {
      return cb()
    }

  }
}
