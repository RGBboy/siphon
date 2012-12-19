/*!
 * siphon
 * Copyright(c) 2012 RGBboy <me@rgbboy.com>
 * MIT Licensed
 */

/**
* Module Dependencies
*/



/**
 * Siphon mutiple events to a single event listener 
 * once all events have fired once
 *
 * @param {String} eventName
 * @param {Array} emitters
 * @param {Function} callback
 * @api public
 */
exports = module.exports = function (eventName, emitters, callback) {

  var i,
      fired = 0,
      args = [],
      total = emitters.length,
      generateCallback = function (index) {
        return function () {
          args[index] = [].slice.call(arguments);
          fired += 1;
          if (fired === total) {
            callback.apply(null, args);
          };
        };
      };

  for (i = 0; i < total; i += 1) {
    args[i] = [];
    emitters[i].once(eventName, generateCallback(i));
  };

};

/**
* Library version.
*/

exports.version = '0.0.1';