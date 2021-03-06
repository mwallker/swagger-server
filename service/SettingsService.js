'use strict';
const db = require('../db');

/**
 * Get settings by type
 * 
 *
 * type String Settings type
 * returns Object
 **/
exports.getSettingsByType = function(type) {
  return new Promise(function(resolve, reject) {
    resolve(db.settings[type]);
  });
}


/**
 * Update bank settings
 * This can only be done by the logged in event.
 *
 * type String The name that needs to be deleted
 * body Object Update settings
 * no response value expected for this operation
 **/
exports.updatebankSettings = function(type, body) {
  return new Promise(function(resolve, reject) {
    db.settings[type] = body

    resolve(body);
  });
}

