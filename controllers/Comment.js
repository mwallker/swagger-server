'use strict';

var utils = require('../utils/writer.js');
var Comment = require('../service/CommentService');

module.exports.createComment = function createComment (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Comment.createComment(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteComment = function deleteComment (req, res, next) {
  var id = req.swagger.params['id'].value;
  var comment_id = req.swagger.params['comment_id'].value;
  Comment.deleteComment(id,comment_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
