'use strict';

const Event = require('./Event')

class EventLaunch extends Event {
    constructor() {
        super("launch")
    }
}

module.exports = EventLaunch