'use strict';

var utils = require('../utils/writer.js');
var Settings = require('../service/SettingsService');

module.exports.getSettingsByType = function getSettingsByType (req, res, next) {
  var type = req.swagger.params['type'].value;
  Settings.getSettingsByType(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatebankSettings = function updatebankSettings (req, res, next) {
  var type = req.swagger.params['type'].value;
  var body = req.swagger.params['body'].value;
  Settings.updatebankSettings(type,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
