
/**
 * Dependencies
 */

var adapter = require('mekanika-adapter')
  , _ = require('lodash');


/**
 * Export adapter
 */

module.exports = exports = adapter.new('file');


/**
 * Core adapter execution method
 *
 * @param req query object
 * @param {Function} cb Callback passed `( err, results )`
 */

exports.exec = function ( req, cb ) {

  // Check requireds
  if (!req || !req.action || !req.resource) return cb('Invalid Query');

  return exports[ req.action ]
    ? exports[ req.action ]( req, cb )
    : cb( 'No action defined:'+req.action );

};
