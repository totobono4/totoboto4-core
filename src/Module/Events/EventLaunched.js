'use strict';

const Event = require('./Event')

class EventLaunched extends Event {
    constructor() {
        super("launched")
    }
}

module.exports = EventLaunched