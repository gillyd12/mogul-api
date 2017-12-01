module.exports = {

  load: function (model, object, nativeObj) {
    "use strict";

    let promise = new Promise(function (resolve, reject) {

      try {
        if (nativeObj) {

          let player_id = nativeObj['Player Name'] + nativeObj['Born'] + nativeObj['Weight'];

          if (model.identity === 'player') {
            resolve(model.findOrCreate({player_id: player_id}, object));
          } else {
            resolve(model.create(object));
          }
        } else {
          reject(new Error('nativeObj is null in load of DataService')).then(function (error) {
            // not called
          }, function (error) {
            sails.log.error(error);
          });
        }
      } catch (error) {
        sails.log.error(error);
      }

    });

    return promise;
  }
}
