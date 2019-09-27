'use strict';
const _ = require('lodash')
const db = require('../db')
var utils = require('../utils/writer.js');

/**
 * Create comment
 * This can only be done by the logged in event.
 *
 * id String The name that needs to be deleted
 * body Comment Created event's comment
 * no response value expected for this operation
 **/
exports.createComment = function(id, body) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id });
    const comment = {
      ...body,
      id: utils.generateId()
    }
    
    if (!event.comments) {
      event.comments = []
    }

    event.comments.push(comment)

    db.events = _.pull(db.events, event)
    db.events.push(event)

    resolve(comment);
  });
}


/**
 * Delete comment
 * This can only be done by the logged in event.
 *
 * id String The name that needs to be deleted
 * comment_id String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteComment = function(id, comment_id) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id });
    const comment = _.find(event.comments, { id: comment_id });

    event.comments = _.pull(event.comments, comment)
    db.events = _.pull(db.events, event)
    db.events.push(event)

    resolve();
  });
}

/**
 * Get comments
 * This can only be done by the logged in event.
 *
 * id String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.getComments = function(id) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id });

    resolve(event.comments);
  });
}

