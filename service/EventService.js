'use strict';
const _ = require('lodash')
const moment = require('moment')
const db = [
  {
    date: '2019-09-10',
    type: 'taxes',
    label: 'Отправить сведения о сделке',
    number: 'Номер',
    id: '34534576',
    modified: '2019-09-15T12:45:00',
    created: '2019-09-15T12:46:00',
    comments: [
      {
        id: '53534534',
        text: 'Consectetur adipiscing elit.',
        time: '2019-09-15T12:45:00'
      },
      {
        id: '87423443',
        text: 'Lorem ipsum dolor sit amet.',
        time: '2019-09-15T12:45:00'
      }
    ]
  },
  {
    date: '2019-09-12',
    type: 'bank',
    label: 'Отправить сведения о сделке',
    number: 'Номер',
    id: '454564456',
    created: '2019-09-15T12:45:00'
  },
  {
    date: '2019-09-01',
    type: 'taxes',
    label: 'Отправить сведения о сделке',
    number: 'Номер',
    id: '9769789645',
    created: '2019-09-15T12:45:00',
    comments: [
      {
        id: '45324784',
        text: 'Consectetur adipiscing elit.',
        time: '2019-09-19T16:45:00'
      }
    ]
  }
]

const generateId = () => (Math.random() * 10000000 + Math.random() * 10000000).toFixed(0).toString()

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
      id: generateId(),
      created: moment().format()
    }

    db.push(event)

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
    resolve();
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
    const event = _.find(db, { id });

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
    resolve(db);
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
    const event = _.find(db, { id })
    const updatedEvent = {
      ...event,
      ...body,
      modified: moment().format()
    }

    db = _.pull(db, event)
    db.push(updatedEvent)

    resolve(updatedEvent)
  });
}

