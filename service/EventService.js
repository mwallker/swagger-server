'use strict';
const _ = require('lodash');
const moment = require('moment');
const db = require('../db');
var utils = require('../utils/writer.js');

/**
 * Create event
 * This can only be done by the logged in event.
 *
 * body Event Created event object
 * no response value expected for this operation
 **/
exports.createEvent = function(body) {
  return new Promise(function(resolve, reject) {
    const event = {
      ...body,
      id: utils.generateId(),
      created: moment().format()
    }

    db.events.push(event)

    resolve(event);
  });
}


/**
 * Delete event
 * This can only be done by the logged in event.
 *
 * id String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteEvent = function(id) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id })
    db.events = _.pull(db.events, event)

    resolve()
  });
}


/**
 * Get event by id
 * 
 *
 * id String The name that needs to be fetched. Use event for testing. 
 * returns Event
 **/
exports.getEventById = function(id) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id });

    resolve(event);
  });
}


/**
 * Get events
 * 
 *
 * returns List
 **/
exports.getEvents = function() {
  return new Promise(function(resolve, reject) {
    resolve(db.events);
  });
}


/**
 * Updated event
 * This can only be done by the logged in event.
 *
 * id String name that need to be updated
 * body Event Updated Event object
 * returns Event
 **/
exports.updateEvent = function(id, body) {
  return new Promise(function(resolve, reject) {
    const event = _.find(db.events, { id })
    const updatedEvent = {
      ...event,
      ...body,
      created: event.created,
      modified: moment().format()
    }

    db.events = _.pull(db.events, event)
    db.events.push(updatedEvent)

    resolve(updatedEvent)
  });
}

