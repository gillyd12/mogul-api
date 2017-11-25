
var player_id = null;
// var primary_key = null;
var identity = null;

// var keyModel: {
//   player_id: {
//     type: 'string'
//   },
//   primary_key: {
//     type: 'string'
//   },
//   identity: {
//     type: 'string'
//   }
// },

module.exports = {

  // load: function (model, object, nativeObj) {
  //   player_id = nativeObj['Player Name'] + nativeObj['Born'] + nativeObj['Weight'];
  //   identity = model.identity;
  //     // object.identity = model.identity;
  //
  //   "use strict";
  //   try {
  //     model.create(object)
  //       .then(function (data) {
  //         // sails.log.info(this.keyModel.identity + " " + data.id + " created");
  //         // primary_key = data.id;
  //         Keys.create({player_id: player_id, primary_key: data.id, identity: identity})
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
  //   } catch (error) {
  //     sails.log.error(error);
  //   }
  // }
  load: function (model, object, nativeObj) {
    player_id = nativeObj['Player Name'] + nativeObj['Born'] + nativeObj['Weight'];
    identity = model.identity;
    // object.identity = model.identity;

    "use strict";
    try {
      return model.create(object);
    } catch (error) {
      sails.log.error(error);
    }
  }

}
